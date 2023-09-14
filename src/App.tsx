import "@mantine/core/styles.css"
import { MantineProvider } from "@mantine/core"
import View from "./View"
import { Shell } from "./Shell/Shell"

export default function App() {
    return (
        <MantineProvider defaultColorScheme="dark">
            <Shell>
                <View></View>
            </Shell>
        </MantineProvider>
    )
}
