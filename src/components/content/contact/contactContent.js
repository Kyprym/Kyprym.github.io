import { ContactChildComponent } from "./contactChildComponent"
import { nanoid } from "nanoid"
import TelegramIcon from '@mui/icons-material/Telegram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import PhoneIcon from '@mui/icons-material/Phone';
import { LogoComponent } from "../../logo/logoCompanent";

export const ContactContentCompanent = () => {
    const iconSize = "3.2rem"
    const iconBorderRadius = "25% 25%"
    const telegramIcon = <TelegramIcon style={{ fontSize: iconSize, color: 'white', backgroundColor: '#135bc7', borderRadius: iconBorderRadius }} />
    const wathAppIcon = <WhatsAppIcon style={{ fontSize: iconSize, color: 'white', backgroundColor: '#128d3f', borderRadius: iconBorderRadius }} />
    const phoneIcon = <PhoneIcon style={{ fontSize: iconSize, color: 'white', backgroundColor: 'green', borderRadius: iconBorderRadius }} />


    const openTelegram = () => {
        const url = "https://t.me/@aleks_sht?text=Добрый день, хочу заказать у вас тортик";
        window.open(url);
    };

    const openWhatsApp = () => {
        const url = "https://wa.me/+79525675639?text=Добрый день, хочу заказать у вас тортик";
        window.open(url);
    };

    const openCall = () => {
        const url = "tel:+79525675639";
        window.location.href = url;
    };

    const contactArr = [
        {
            text: "Telegram",
            icon: telegramIcon,
            openMessenger: openTelegram
        },
        {
            text: "WhatsApp",
            icon: wathAppIcon,
            openMessenger: openWhatsApp
        },
        {
            text: "Позвонить",
            icon: phoneIcon,
            openMessenger: openCall
        },
    ]


    return <div id="contactContentCompanent">
        <LogoComponent />
        <p>Вы можете связаться со мной через:</p>
        <span id="contactContentButtons">
            {
                contactArr.map(elem => {
                    return <ContactChildComponent
                        text={elem.text}
                        icon={elem.icon}
                        openMessenger={elem.openMessenger}
                        key={nanoid()}

                    />
                })
            }
        </span>
    </div>
}
