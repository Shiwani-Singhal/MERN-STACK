

import { Dialog , Box, Typography, List, ListItem,styled} from '@mui/material';


import { qrCodeImage } from '../../constants/data';

import { GoogleLogin } from '@react-oauth/google';

const Component = styled(Box)`
    display: flex
`;

const Container = styled(Box)
`
    padding: 56px 0 56px 56px;
`;

const QRCode = styled('img')({
    height: 264,
    width:264,
    margin: '50px 0 0 50px'
})


const Title = styled(Typography)`
    font-size: 26px;
    coloe: #525252;
    font-eight: 300;
    font-family: inherit;
    margin-bottom : 25px;
`

const StyledList = styled(List)`
    & > li{
        padding: 0;
        margin-top: 15px;
        font-size: 18px;
        line-height: 28px;
        color:#4a4a4a;

    }
`


const dialogStyle = {
    height: '96%',
    marginTop: '12%',
    width:'60%',
    maxWidth: '100%',
    boxShadow: 'none',
    overflow: 'hidden'

}

const LoginDialog = () =>
{
    return(
        <Dialog
        open = {true}
        PaperProps = {{sx:dialogStyle}}>
        
            <Component>
                <Container>
                    <Title>To Use Whatsapp on your computer</Title>
                    <StyledList>
                        <ListItem>
                            1. Open Whatsapp on your phone
                        </ListItem>
                        <ListItem>
                            2. Tap Menu settings and select Whatsapp Web
                        </ListItem>
                    <ListItem>
                        3. Point your phone on this screen to capture the code
                    </ListItem>

                    </StyledList>
                </Container>
                <Box>
                    <QRCode src = { qrCodeImage } alt = "QRCode"/>
                    <Box>
                        <GoogleLogin/>
                    </Box>
                </Box>

            </Component>
        </Dialog>
    )
}

export default LoginDialog;