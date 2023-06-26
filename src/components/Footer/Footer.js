import s from './Footer.module.css'
import insta from './media/insta.png'
import whatsapp from './media/whatsapp.png'

function Footer() {
  return (
    <div className={s.footer_container}>
        <div className={s.footer_contacts_container}>
            <div className={s.contact}>
                <h3 className={s.title}>Contact</h3>
                <h2>+49 999 999 99 99</h2>
                <div className={s.social}>
                    <div>
                        <img src={insta} alt="instagarm" />
                        <p>instagram</p>
                    </div>
                    <div>
                        <img src={whatsapp} alt="whatsapp" />
                        <p>WhatsApp</p>
                    </div>
                </div>
            </div>
            <div className={s.address}>
                <h3 className={s.title}>Address</h3>
                <a href='https://www.google.com/search?q=telranDE' target="_blank">Linkstraße 2, 8 OG, 10785, Berlin, Deutschland</a>
                <p>Working Hours:</p>
                <p>24 hours a day</p>
            </div>
        </div>
        <div>
        <iframe
          title="googleMaps"
          width="100%"
          height="600"
          frameBorder="0"
          scrolling="no"
          marginHeight="0"
          marginWidth="0"
          src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Linkstra%C3%9Fe%202,%208%20OG,%2010785,%20Berlin,%20Deutschland+(My%20Business%20Name)&amp;t=&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        ></iframe>
      </div>
    </div>
  )
}

export default Footer