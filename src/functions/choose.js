import { BiTime } from 'react-icons/bi';
import { FiCodepen } from 'react-icons/fi'
import { SiCodepen } from 'react-icons/si'
import {SiMicrosoftedge} from 'react-icons/si'
import { FaCropAlt } from 'react-icons/fa';

export const choose = [
	{name:"अनुभवी और कुशल प्लंबर",
	icon:<FaCropAlt className="h-10 w-10"/>,
	summary:"हमारी कंपनी के पास अनुभवी और कुशल प्लंबरों की एक टीम है जो आपके सामने आने वाली किसी भी प्लंबिंग समस्या से निपटने के लिए अच्छी तरह से सुसज्जित हैं।"
	},
	{
		name: "विश्वसनीय एवं कुशल सेवा",
		icon:<FiCodepen className="h-10 w-10" /> ,
		summary: "हम अपने ग्राहकों को विश्वसनीय और कुशल सेवा प्रदान करने का प्रयास करते हैं। हम समय पर पहुंचते हैं, काम जल्दी और कुशलता से पूरा करते हैं"
	},
	{
		name: "प्रतिस्पर्धी मूल्य निर्धारण",
		icon: <SiCodepen className="h-10 w-10" />,
		summary: "हम अपने काम की गुणवत्ता से समझौता किए बिना प्रतिस्पर्धी मूल्य निर्धारण की पेशकश करते हैं"
	},
	{
		name: 'ग्राहक संतुष्टि',
		icon: <SiMicrosoftedge className="h-10 w-10" />,
		summary: "हम आपकी ज़रूरतों और चिंताओं को सुनते हैं, और आपकी पाइपलाइन संबंधी समस्याओं का सर्वोत्तम समाधान खोजने के लिए आपके साथ काम करते हैं"
	},
	{
		name: "24/7 आपातकालीन सेवा",
		icon: <BiTime className="h-10 w-10" />,
		summary: "हम 24/7 आपातकालीन वायरिंग सेवाएँ प्रदान करते हैं। यदि आपके पास वायरिंग की आपात स्थिति है"
	}
]