import styles from './Main.module.scss'

const Main = () => {
  return (
    <div>
      <main className={styles.main}>

          <div id="about" className={styles.container1}>
            <h1 className={styles.title_about}>ABOUT ME</h1>
          </div>

          <div className={styles.container2}>

            <div className={styles.cont_for_image}>
              <div className={styles.about_image}>
                <img src="./src/assets/images/image2.png" alt='' className={styles.me}/>
              </div>
            </div>

            
            <div className={styles.about_messages}>

              <div className={styles.some_message}>
                <ul>
                  <li><p>Hey, who are you?</p></li>  
                </ul>
              </div>

              <div className={styles.my_message1}>
                <ul className={styles.cont_for_text}>
                  <li><p>Hi there!</p></li>
                  <li><p>I'm Panteleev Sergey, and that's my short web-resume.</p></li>
                  <li><p>Glad to see u here! Let's start...</p></li>
                </ul>
              </div>

              <div className={styles.my_message2}>
                <ul className={styles.cont_for_text}>
                  <li><p>I'm living in Rostov-on-Don, I'm 20 y.o, still in university, in DSTU. 
                    5 years ago I have dreamed about web-programmer job, because of that I work with React and Nest Js now, but later about this</p></li>
                </ul>
              </div>

              <div className={styles.my_message3}>
                <ul className={styles.cont_for_text}>
                  <li><p>I like everything about web-programming and wanna be a good coder...</p></li>
                </ul>
              </div>

              <div className={styles.my_message_new}>
                <ul className={styles.cont_for_text}>
                  <li className={styles.circle1}></li>
                  <li className={styles.circle2}></li>
                  <li className={styles.circle3}></li>
                </ul>
              </div>

            </div>
          
          </div>

          <div className={styles.container3}>
            <h1 className={styles.title_about}>STACK</h1>
          </div>

          <div className={styles.cards}>
            <ul className={styles.cards_list}>
              <li className={styles.card1}></li>
              <li className={styles.card2}></li>
              <li className={styles.card3}></li>
            </ul>
          </div>
      </main>
    </div>
  )
}

export default Main