import styles from './Main.module.scss'
import { useInView } from 'react-intersection-observer';

const Main = () => {


  const { ref: magicSectionRef, inView: magicSectionIsVisible } = useInView();
  const { ref: magicSectionRef2, inView: magicSectionIsVisible2 } = useInView();

  return (
    <div>
      <main className={styles.main} >

          <div className={styles.container1} >
            <h1 className={styles.title_about}>ABOUT ME</h1>
          </div>

          <div className={styles.container2}>

            <ul className={styles.left_side_image_text}>

              <li><img src="./src/assets/images/me.png" alt='' className={styles.me}/></li>
              <li><h3 className={styles.title_text}>FrontEnd Developer</h3></li>
              <li><p className={styles.description_text}>Sergey, 20 years old, Russia, Rostov-on-Don.</p></li>
              <li><p className={styles.description_text2}>My experience is above than 2 years. I have been upgrading my skills at coding 
                and self-learning all this time, that's why I may be competitive programmer</p>
              </li>
                
            </ul>
            
            <div className={styles.about_messages}>

              <div className={styles.some_message}>
                <ul>
                  <li><p>Hey, who are you?</p></li>  
                </ul>
              </div>

              <div className={styles.for_my_messages}>

                <div className={styles.my_message1}>
                  <ul className={styles.cont_for_text}>
                    <li><p>Hi there!</p></li>
                    <li><p>I'm Panteleev Sergey, FrontEnd developer-beginner.</p></li>
                    <li><p>Glad to see you! Let's start...</p></li>
                  </ul>
                </div>

                <div className={styles.my_message2}>
                  <ul className={styles.cont_for_text}>
                    <li><p>I'm living in Rostov-on-Don, I'm 20 y.o, still in university, in DSTU. 
                      5 years ago I have dreamed about FrontEnd developer job, because of that I work with React and Next now, but later about this</p></li>
                  </ul>
                </div>

                <div className={styles.my_message3}>
                  <ul className={styles.cont_for_text}>
                    <li><p>I like everything about web-programming, that's why i wanna be good at this...</p></li>
                  </ul>
                </div>

                <ul className={styles.my_message_new}>
                  <li className={styles.cont_for_text}>
                    <figure className={styles.circle1}></figure>
                    <figure className={styles.circle2}></figure>
                    <figure className={styles.circle3}></figure>
                  </li>
                </ul>

              </div>
            </div>
          
          </div>
          <div id="stack" className={styles.container3}>
            <h1 className={styles.title_stack}> MY STACK</h1>
          </div>

          <div className={styles.container_4} ref={magicSectionRef}>

            <div className={styles.cards_list}>
              <div className={styles.for_line}>

                <ul className={styles.card}>
                  <li><img src="./src/assets/images/html2.png" alt='' className={styles.html}/></li>
                  <li><hr className={styles.line}/></li>
                  <li><p className={styles.text_card}>Markup Language HTML5</p></li>
                </ul>
                <div className={styles.hr}/>
              </div>
              

            <div className={styles.for_line}>
              <ul className={styles.card}>
                <li><img src="./src/assets/images/jsts.png" alt='' className={styles.jsts}/></li>
                <li><hr className={styles.line}/></li>
                <li><p className={styles.text_card2}>JavaScript/ TypeScript</p></li>
              </ul>
              <div className={styles.hr}/>
            </div>

            <div className={styles.for_line}>
              <ul className={styles.card}>
                <li><img src="./src/assets/images/css.png" alt='' className={styles.css}/></li>
                <li className='das'><hr className={styles.line}/></li>
                <li><p className={styles.text_card3}>Decoration Language CSS3</p></li>
              </ul>
              <div className={styles.hr}/>
            </div>
          </div>

        </div>

        
        <section className={styles.container_5} ref={magicSectionRef}>
            <ul className={styles.frame_work_list}>
              <li ref={magicSectionRef2}><h1 className={`${styles.big_frame_text} ${magicSectionIsVisible ? styles.animate_container : ''}`}>FRAME</h1></li>
              <li><h1 className={`${styles.big_works_text} ${magicSectionIsVisible ? styles.animate_container2 : ''}`}>WORKS</h1></li>
            </ul>
        </section>

      </main>
    </div>
  )
}

export default Main