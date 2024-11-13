import { ContactChildComponent } from "./contactChildComponent"
import { nanoid } from "nanoid"
import TelegramIcon from '@mui/icons-material/Telegram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import PhoneIcon from '@mui/icons-material/Phone';

export const ContactContentCompanent = () => {
    const iconSize = "4rem"
    const iconBorderRadius = "25% 25%"
    const telegramIcon = <TelegramIcon style={{ fontSize: iconSize, color: 'white', backgroundColor: '#135bc7', borderRadius: iconBorderRadius }} />
    const wathAppIcon = <WhatsAppIcon style={{ fontSize: iconSize, color: 'white', backgroundColor: '#128d3f', borderRadius: iconBorderRadius }} />
    const phoneIcon = <PhoneIcon style={{ fontSize: iconSize, color: 'white', backgroundColor: 'green', borderRadius: iconBorderRadius }} />


    const contactArr = [
        {
            text: "Telegram",
            icon: telegramIcon
        },
        {
            text: "WhatsApp",
            icon: wathAppIcon
        },
        {
            text: "Позвонить",
            icon: phoneIcon
        },
    ]

    return <div id="contactContentCompanent">
        {
            contactArr.map(elem => {
                return <ContactChildComponent
                    text={elem.text}
                    icon={elem.icon}
                    key={nanoid()}

                />
            })
        }
    </div>
}
