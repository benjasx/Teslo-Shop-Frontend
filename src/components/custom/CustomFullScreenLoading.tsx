export interface CustomFullScreenLoadingProps {
  message?: string;
  showBackdrop?: boolean;
}

export const CustomFullScreenLoading: React.FC<
  CustomFullScreenLoadingProps
> = ({ message = "Cargando...", showBackdrop = true }) => {
  return (
    <div
      className={`fixed inset-0 flex items-center justify-center ${
        showBackdrop ? "bg-black/80 backdrop-blur-sm" : ""
      } z-50`}
    >
      <div className="flex flex-col items-center justify-center gap-6">
        {/* Tesla Logo Spinner */}
        <div className="relative w-24 h-24">
          {/* Outer rotating ring */}
          <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-white border-r-white animate-spin" />

          {/* Middle pulsing ring */}
          <div
            className="absolute inset-2 rounded-full border border-white/30 animate-pulse"
            style={{
              animationDuration: "2s",
            }}
          />

          {/* Inner Tesla T */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-white font-bold text-3xl tracking-wider">
              T
            </div>
          </div>
        </div>

        {/* Mensaje con tipografía premium */}
        {message && (
          <div className="flex flex-col items-center gap-2">
            <p className="text-xl font-light text-white tracking-wide">
              {message}
            </p>
            {/* Línea decorativa */}
            <div className="w-12 h-0.5 bg-linear-to-r from-transparent via-white to-transparent" />
          </div>
        )}

        {/* Indicador de progreso minimalista */}
        <div className="flex gap-1">
          <div className="w-1 h-1 rounded-full bg-white/60 animate-pulse" />
          <div
            className="w-1 h-1 rounded-full bg-white/60 animate-pulse"
            style={{ animationDelay: "0.2s" }}
          />
          <div
            className="w-1 h-1 rounded-full bg-white/60 animate-pulse"
            style={{ animationDelay: "0.4s" }}
          />
        </div>
      </div>
    </div>
  );
};
