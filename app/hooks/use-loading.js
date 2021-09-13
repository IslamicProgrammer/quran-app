import { useEffect, useState } from "react"
import { ActivityIndicator } from "../components/common"

export default function useLoading(Component) {
  const [loading, setLoading] = useState(false)
  let Comp
  useEffect(() => {
    if (loading) Comp = <ActivityIndicator />
    else Comp = <Component />
  }, [loading])

  return {
    Comp,
    setLoading,
  }
}
