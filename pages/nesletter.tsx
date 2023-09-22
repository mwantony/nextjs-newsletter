import Box from "@src/components/Box/Box";
import Image from "@src/components/Image/Image";

export default function NewsletterScreen() {
    return(
        <Box 
        styleSheet={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <Box  styleSheet={{
            alignItems: 'center',
            width: '100%'
        }}>
            <Image alt='Foto do DevSoutinho' src='https://github.com/omariosouto.png' 
            styleSheet={{
                borderRadius: '100%'
            }}></Image>
            </Box>
        </Box>
    )
}