import { Button, Center, Space } from "@mantine/core"

export default function View() {
    return (
        <div>
            <Space h={10}></Space>
            <Center>
                <Button variant="default" color="indigo">
                    Hello
                </Button>
            </Center>
        </div>
    )
}
