import { useEffect, useState} from 'react';
import styles from './Main.module.scss'
import { useInView } from 'react-intersection-observer';
import './Carousel';

const Main = () => {

  const { ref: magicSectionRef, inView: magicSectionIsVisible } = useInView({threshold: 0.01});
  const { ref: magicSectionRef2, inView: magicSectionIsVisible2 } = useInView({threshold: 0.01});
  const { ref: magicSectionRef3, inView: magicSectionIsVisible3 } = useInView({threshold: 0.01});

  const [isMagicSectionAnimated, setIsMagicSectionAnimated] = useState(false);
  const [isFrameworksAnimated, setIsFrameworksAnimated] = useState(false);
  

  useEffect(() => {
    if (magicSectionIsVisible && !isMagicSectionAnimated) {
      setIsMagicSectionAnimated(true);
    }
  }, [magicSectionIsVisible, isMagicSectionAnimated]); 
  
  useEffect(() => {
    if (magicSectionIsVisible3 && !isFrameworksAnimated) {
      setIsFrameworksAnimated(true);
    }
  }, [magicSectionIsVisible3, isFrameworksAnimated]); 

  return (
    <div>
      <main className={styles.main} >

          <head className={styles.container1} >
            <h1 className={styles.title_about}>ABOUT ME</h1>
          </head>

          <section className={styles.container2}>

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
          </section>

          <head id="stack" className={styles.container3}>
            <h1 className={styles.title_stack}> MY STACK</h1>
          </head>

          <section className={styles.container_4} ref={magicSectionRef}>

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

        </section>

        
        <section className={styles.container_5} ref={magicSectionRef}>
            <ul className={styles.frame_work_list}>
              <li><h1 className={`${styles.big_frame_text} ${magicSectionIsVisible ? styles.animate_container : ''}`}>FRAME</h1></li>
              <li ref={magicSectionRef2}></li>
              <li><h1 className={`${styles.big_works_text} ${magicSectionIsVisible2 ? styles.animate_container2 : ''}`}>WORKS</h1></li>
            </ul>
        </section>

        <section className={styles.framworks_section} ref={magicSectionRef3}>
          
          <div className={`${styles.frameworks_list} ${magicSectionIsVisible3 ? styles.animate_frameworks_description : ''}`}>

            <div className={styles.nest_element}>
              <ul>
                <li className={styles.title_nest}><p>NEST.JS</p></li>
                <li className={styles.text_nest}><p>Nest.js - it is a framework for creating BackEnd for server Web apps. It expands functional of Express.js</p></li>
              </ul>
              <div className={styles.nest_image_container}>
                <img src="./src/assets/images/nest.png" alt="" className={styles.nest_img}/>
              </div>
            </div>

            <div className={styles.next_elemet}>
              <ul>
                  <li className={styles.title_next}>NEXT.JS</li>
                  <li className={styles.text_next}>Next.js - it is a framework for creating FrontEnd part of Web app. It works on React.js</li>
              </ul>
              <div className={styles.next_image_container}>
                <img src="./src/assets/images/next.png" alt="" className={styles.next_img}/>
              </div>
            </div>

          </div>

        </section>

        <section className={styles.experience_container}>
          <h1 id='experience' className={styles.title_experience}>MORE EXPERIENCE</h1>
          <ul className={styles.carousel}>

            <li className={styles.git}>
              <h1>Git</h1>
              <span><img src="" alt="" /></span>
              <p>All basic git commands are in my baggage. It is the most important part of
                team code developing
              </p>
            </li>

            <li className={styles.agile_scrum}>
              <h1>Agile/Scrum</h1>
              <span><img src="" alt="" /></span>
              <p>I have been study by this two systems in university. I know, what is the life 
                of project and what members need do for keep it safe
              </p>
            </li>

            <li className={styles.figma}>
              <h1>Figma</h1>
              <span><img src="" alt="" /></span>
              <p>I have an experience of working with Figma and other graphic editors. 
                This Web site design was created by me
              </p>
            </li>

            <li className={styles.architecture}>
              <h1>Architecture MVC</h1>
              <span><img src="" alt="" /></span>
              <p></p>
            </li>

            <li className={styles.teamwork}>
              <h1>Teamwork</h1>
              <span><img src="" alt="" /></span>
              <p></p>
            </li>

            <li className={styles.english}>
              <h1>English B2</h1>
              <span><img src="" alt="" /></span>
              <p>My English is at B2 level</p>
            </li>

          </ul>

        </section>

        <section id='git' className={styles.repositories}>
          <div className={styles.container_8}>
            <button className={styles.git_button}>GITHUB</button>            
          </div>
        </section>

      </main>
    </div>
  )
}

export default Main