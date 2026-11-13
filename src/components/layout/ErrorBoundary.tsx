import { Component, ErrorInfo, ReactNode } from 'react';
import { reportError } from '@/utils/analytics';

interface ErrorBoundaryProps {
  children: ReactNode;
  fallback?: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  public state: ErrorBoundaryState = {
    hasError: false,
    error: null,
  };

  public static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    reportError(error, errorInfo.componentStack || undefined);
    console.error('[ErrorBoundary caught error]:', error, errorInfo);
  }

  private handleReset = (): void => {
    this.setState({ hasError: false, error: null });
  };

  private handleReload = (): void => {
    window.location.reload();
  };

  public render(): ReactNode {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div
          role="alert"
          aria-live="assertive"
          className="min-h-screen bg-[#080A09] text-typography-body flex items-center justify-center p-4 selection:bg-accent-emerald/20 selection:text-white"
        >
          <div className="w-full max-w-lg rounded-xl border border-red-500/30 bg-[#0C100E] p-6 sm:p-8 shadow-2xl backdrop-blur-xl relative overflow-hidden">
            {/* Top Glow & Hairline Accent */}
            <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-red-500/20 via-red-500 to-red-500/20" />
            
            {/* Terminal Chrome Header */}
            <div className="flex items-center justify-between border-b border-white/[0.08] pb-3 mb-5">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500/90 animate-pulse inline-block" />
                <span className="text-xs font-mono text-typography-dim">
                  KERNEL_PANIC // CLIENT_BOUNDARY
                </span>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-red-500/10 text-red-400 border border-red-500/20">
                FATAL_CAUGHT
              </span>
            </div>

            {/* Error Content */}
            <div className="space-y-4">
              <h2 className="text-lg sm:text-xl font-display font-bold text-typography-headline">
                An unexpected interface anomaly occurred
              </h2>
              <p className="text-xs sm:text-sm text-typography-muted leading-relaxed">
                The application encountered an unhandled state exception. Telemetry has been logged without storing any personal data.
              </p>

              {this.state.error && (
                <div className="p-3 rounded-lg bg-black/60 border border-white/[0.08] font-mono text-xs text-red-300 overflow-x-auto">
                  <span className="text-typography-dim select-none">$ </span>
                  {this.state.error.message || 'Unknown runtime error'}
                </div>
              )}

              {/* Recovery Actions */}
              <div className="pt-4 flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={this.handleReload}
                  className="px-5 py-2.5 rounded-lg bg-accent-emerald hover:bg-emerald-400 text-black font-semibold text-xs font-mono transition-colors shadow-lg shadow-accent-emerald/20"
                >
                  Reload Application
                </button>
                <button
                  type="button"
                  onClick={this.handleReset}
                  className="px-4 py-2.5 rounded-lg bg-white/[0.05] hover:bg-white/[0.1] text-typography-headline text-xs font-mono border border-white/10 transition-colors"
                >
                  Attempt Soft Reset
                </button>
              </div>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
