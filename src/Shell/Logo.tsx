import { Flex } from "@mantine/core"
import steelix from "./steelix.png"

const logo = (
    <svg fill="#f8f9fa" height={16} viewBox="0 0 608.03 106.25">
        <path d="m0,93.75V6.25h12.5v12.5h12.5v12.5h-12.5v62.5H0Zm25-50v-12.5h12.5v12.5h-12.5Zm12.5,12.5v-12.5h12.5v12.5h-12.5Zm12.5-12.5v-12.5h12.5v12.5h-12.5Zm25,50V31.25h-12.5v-12.5h12.5V6.25h12.5v87.5h-12.5Z" />
        <path d="m101.17,68.75V31.25h12.5v37.5h-12.5Zm12.5-37.5v-12.5h12.5v12.5h-12.5Zm0,50v-12.5h12.5v12.5h-12.5Zm12.5-62.5V6.25h37.5v12.5h-37.5Zm0,75v-12.5h37.5v12.5h-37.5Zm37.5-62.5v-12.5h12.5v12.5h-12.5Zm0,50v-12.5h12.5v12.5h-12.5Zm12.5-12.5V31.25h12.5v37.5h-12.5Z" />
        <path d="m202.34,93.75V6.25h12.5v12.5h12.5v12.5h-12.5v62.5h-12.5Zm25-50v-12.5h12.5v12.5h-12.5Zm12.5,12.5v-12.5h12.5v12.5h-12.5Zm12.5,12.5v-12.5h12.5v12.5h-12.5Zm25,25v-12.5h-12.5v-12.5h12.5V6.25h12.5v87.5h-12.5Z" />
        <path d="m303.52,93.75V6.25h62.5v12.5h-50v62.5h50v12.5h-62.5Zm62.5-62.5v-12.5h12.5v12.5h-12.5Zm0,50v-12.5h12.5v12.5h-12.5Zm12.5-12.5V31.25h12.5v37.5h-12.5Z" />
        <path d="m404.69,93.75V6.25h87.5v12.5h-75v25h62.5v12.5h-62.5v25h75v12.5h-87.5Z" />
        <path d="m518.36,31.25v-12.5h-12.5V6.25h25v25h-12.5Zm-12.5,62.5v-12.5h12.5v-12.5h12.5v25h-25Zm25-50v-12.5h12.5v12.5h-12.5Zm0,25v-12.5h12.5v12.5h-12.5Zm12.5-12.5v-12.5h12.5v12.5h-12.5Zm12.5-12.5v-12.5h12.5v12.5h-12.5Zm0,25v-12.5h12.5v12.5h-12.5Zm12.5-37.5V6.25h25v12.5h-12.5v12.5h-12.5Zm0,62.5v-25h12.5v12.5h12.5v12.5h-25Z" />
    </svg>
)

export default function Logo() {
    return (
        <Flex gap={10} align="center">
            <img height={32} width={32} src={steelix} alt="steelix" />
            {logo}
        </Flex>
    )
}