import { AppRouter } from "./routes/AppRouter"
import { AppTheme } from "./theme/AppTheme"

export const App = () => {
  return (
    <AppTheme>
      <AppRouter />
    </AppTheme>
  )
}
