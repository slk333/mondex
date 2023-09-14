import { useDisclosure } from "@mantine/hooks"
import { AppShell, Burger, Flex } from "@mantine/core"
import { ReactNode } from "react"
import Logo from "./Logo"

export function Shell(props: { children: ReactNode }) {
    const [opened, { toggle }] = useDisclosure()

    return (
        <AppShell
            header={{ height: 60 }}
            navbar={{ width: 300, breakpoint: "sm", collapsed: { mobile: !opened } }}
            padding="md"
        >
            <AppShell.Header>
                <Flex ml={20} gap={10} h={"100%"} align="center">
                    <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
                    <Logo />
                </Flex>
            </AppShell.Header>

            <AppShell.Navbar p="md">Navbar</AppShell.Navbar>

            <AppShell.Main>{props.children}</AppShell.Main>
        </AppShell>
    )
}
