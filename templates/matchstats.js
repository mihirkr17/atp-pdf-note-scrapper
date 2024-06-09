const matchstats = [
   {
      language: "English",
      languageCode: "en",
      category: "WTA / ATP Tennis Predictions",
      categoryId: 4339,
      title: "Who Will Win #playerOneSurname vs #playerTwoSurname? Prediction For ATP #eventName #eventYear",
      playerTag: "#playerName Predictions",
      eventTag: "ATP #eventName Predictions",
      contents: function (eventName,
         leads,
         eventAddress,
         playerOne,
         playerTwo,
         eventDate,
         eventHeading2,
         eventRound,
         eventDay,
         paraphrasedBlog,
         player1slug,
         player2slug,
         imgWrapper,
         playerOneSurname,
         playerTwoSurname,
         eventYear,
         plainEventName
      ) {

         return `<div style="padding-bottom: 5px;">
         <div style="display: flex; flex-direction: row; gap: 6px;">${imgWrapper?.join("")}</div>
         <br/>
         <h3>What Time Will ${playerOne} Play Against ${playerTwo}?</h3>
            ${`<p>
            ${playerOneSurname} and ${playerTwoSurname} are on the ${eventDay} Schedule at ${plainEventName} ${eventYear} on ${eventDate}. Lets breakdown the career, past stats and recent form of these players and predict who will get the victory.
            </p>`.replace(/\n/g, " ")}    
         <br/> <br/>
         <h3>Who Will Win In This Head-To-Head?</h3>
         <p>${paraphrasedBlog && paraphrasedBlog?.replace(/^"|"$/g, '')}</p>
         <br/> <br/>
         <h3>My Conclusion / Prediction:</h3>
         <p>
            <b>My pick is that ${playerOneSurname} will win.</b>
            Matchstat.com has an Artificial Intelligence (Ai) prediction model that is trained on all professional ATP and WTA past matches. 
            To find out who our model thinks will win for ${playerOne} vs ${playerTwo}, have a look at the prediction here:
            <br/>
            <a href="https://matchstat.com/tennis/h2h-odds-bets/${player1slug}/${player2slug}/" target="_blank">
               <b>Matchstat.com ${playerOne} vs ${playerTwo} prediction.</b>
            </a> 
         </p>
         </div>`
      }
   },
   {
      language: "Spanish",
      languageCode: "es",
      category: "Predicciones De Tenis WTA / ATP",
      categoryId: 4375,
      title: "¿Quién Ganará #playerOneSurname vs #playerTwoSurname? Pronósticos Para ATP #eventName #eventYear",
      playerTag: "#playerName Pronósticos",
      eventTag: "Pronósticos ATP #eventName",
      contents: function (eventName,
         leads,
         eventAddress,
         playerOne,
         playerTwo,
         eventDate,
         eventHeading2,
         eventRound,
         eventDay,
         paraphrasedBlog,
         player1slug,
         player2slug,
         imgWrapper,
         playerOneSurname,
         playerTwoSurname,
         eventYear,
         plainEventName) {
         return `<div style="padding-bottom: 5px;">
            <div style="display: flex; flex-direction: row; gap: 6px;">${imgWrapper?.join("")}</div>
            <br/>
            <h3>¿A qué hora jugará ${playerOne} contra ${playerTwo}?</h3>
            ${`<p>
            ${playerOneSurname} y ${playerTwoSurname} están en el programa de ${eventDay} en ${plainEventName} ${eventYear} el ${eventDate}. Analicemos la carrera, las estadísticas pasadas y la forma reciente de estos jugadores y pronostiquemos quién obtendrá la victoria.
            </p>`.replace(/\n/g, " ")}
            <br/> <br/>
            <h3>¿Quién ganará en este cara a cara?</h3>
            <p>${paraphrasedBlog && paraphrasedBlog?.replace(/^"|"$/g, '')}</p>
            <br/> <br/>
            <h3>Mi Pronósticos / Conclusión:</h3>
            <p>
               <b>Mi elección es que ganará ${playerOneSurname}.</b>
               Matchstat.com tiene un modelo de Pronósticos de Inteligencia Artificial (IA) que se entrena en todos los partidos profesionales anteriores de la ATP y la WTA. 
               Para saber quién cree nuestro modelo que ganará en ${playerOne} frente a ${playerTwo}, echa un vistazo aquí:
               <br/>
               <a href="https://matchstat.com/tennis/h2h-odds-bets/${player1slug}/${player2slug}/" target="_blank">
                  <b>Pronóstico de Matchstat.com ${playerOne} vs ${playerTwo}.</b>
               </a> 
            </p>
            </div>`
      }
   },
   {
      language: "Portugease",
      languageCode: "pt",
      category: "Previsões De Tênis WTA / ATP",
      categoryId: 4376,
      title: "Quem Ganhará #playerOneSurname vs #playerTwoSurname? Palpites Para ATP #eventName #eventYear",
      playerTag: "#playerName Palpites",
      eventTag: "Palpites ATP #eventName",
      contents: function (eventName,
         leads,
         eventAddress,
         playerOne,
         playerTwo,
         eventDate,
         eventHeading2,
         eventRound,
         eventDay,
         paraphrasedBlog,
         player1slug,
         player2slug,
         imgWrapper,
         playerOneSurname,
         playerTwoSurname,
         eventYear,
         plainEventName) {
         return `<div style="padding-bottom: 5px;">
            <div style="display: flex; flex-direction: row; gap: 6px;">${imgWrapper?.join("")}</div>
            <br/>
            <h3>A que horas ${playerOne} jogará contra ${playerTwo}?</h3>
            ${`<p>
            ${playerOneSurname} e ${playerTwoSurname} estão na programação ${eventDay} em ${plainEventName} ${eventYear} em ${eventDate}. Vamos analisar a carreira, as estatísticas anteriores e a forma recente desses jogadores e prever quem conseguirá a vitória.
            </p>`.replace(/\n/g, " ")}
            <br/> <br/>
            <h3>Quem vencerá neste confronto direto?</h3>
            <p>${paraphrasedBlog && paraphrasedBlog?.replace(/^"|"$/g, '')}</p>
            <br/> <br/>
            <h3>Minha Palpites / Conclusão:</h3>
            <p>
               <b>Minha escolha é que ${playerOneSurname} vencerá.</b>
               Matchstat.com possui um modelo de Palpites de Inteligência Artificial (IA) que é treinado em todas as partidas profissionais anteriores da ATP e WTA. 
               Para descobrir quem nosso modelo acha que ganhará ${playerOne} vs ${playerTwo}, dê uma olhada aqui:
               <br/>
               <a href="https://matchstat.com/tennis/h2h-odds-bets/${player1slug}/${player2slug}/" target="_blank">
                  <b>Palpites de ${playerOne} vs ${playerTwo} do Matchstat.com.</b>
               </a> 
            </p>
            </div>`
      }
   },
   {
      language: "French",
      languageCode: "fr",
      category: "Prédictions De Tennis WTA / ATP",
      categoryId: 4377,
      title: "Qui Gagnera #playerOneSurname Contre #playerTwoSurname ? Pronostics Pour l'ATP #eventName #eventYear",
      playerTag: "Pronostics #playerName",
      eventTag: "Pronostics ATP #eventName",
      contents: function (eventName,
         leads,
         eventAddress,
         playerOne,
         playerTwo,
         eventDate,
         eventHeading2,
         eventRound,
         eventDay,
         paraphrasedBlog,
         player1slug,
         player2slug,
         imgWrapper,
         playerOneSurname,
         playerTwoSurname,
         eventYear,
         plainEventName) {

         return `<div style="padding-bottom: 5px;">
            <div style="display: flex; flex-direction: row; gap: 6px;">${imgWrapper?.join("")}</div>
            <br/>
            <h3>À quelle heure ${playerOne} jouera-t-il contre ${playerTwo} ?</h3>
            ${`<p>
            ${playerOneSurname} et ${playerTwoSurname} sont inscrits au programme ${eventDay} à ${plainEventName} ${eventYear} le ${eventDate}. Décomposons la carrière, les statistiques passées et la forme récente de ces joueurs et prédisons qui remportera la victoire.
            </p>`.replace(/\n/g, " ")}
            <br/> <br/>
            <h3>Qui va gagner dans ce face-à-face ?</h3>
            <p>${paraphrasedBlog && paraphrasedBlog?.replace(/^"|"$/g, '')}</p>
            <br/> <br/>
            <h3>Ma Pronostics / Conclusion :</h3>
            <p>
               <b>Mon choix est que ${playerOneSurname} gagnera.</b>
               Matchstat.com dispose d'un modèle de pronostics d'intelligence artificielle (IA) qui est formé sur tous les matchs professionnels passés de l'ATP et de la WTA. 
               Pour savoir qui, selon notre modèle, gagnera pour ${playerOne} contre ${playerTwo}, jetez un œil ici :
               <br/>
               <a href="https://matchstat.com/tennis/h2h-odds-bets/${player1slug}/${player2slug}/" target="_blank">
                  <b>Pronostics Matchstat.com ${playerOne} contre ${playerTwo}.</b>
               </a> 
            </p>
            </div>`
      }
   },
   {
      language: "German",
      languageCode: "de",
      category: "Tennis Tipps & Prognosen WTA / ATP ",
      categoryId: 4378,
      title: "Wer Gewinnt #playerOneSurname vs. #playerTwoSurname? Wett-Tipps & Prognosen Für ATP #eventName #eventYear",
      playerTag: "#playerName Wett-Tipps & Prognosen",
      eventTag: "ATP #eventName- Wett-Tipps & Prognosen",
      contents: function (eventName,
         leads,
         eventAddress,
         playerOne,
         playerTwo,
         eventDate,
         eventHeading2,
         eventRound,
         eventDay,
         paraphrasedBlog,
         player1slug,
         player2slug,
         imgWrapper,
         playerOneSurname,
         playerTwoSurname,
         eventYear,
         plainEventName) {

         return `<div style="padding-bottom: 5px;">
            <div style="display: flex; flex-direction: row; gap: 6px;">${imgWrapper?.join("")}</div>
            <br/>
            <h3>Wann spielt ${playerOne} gegen ${playerTwo}?</h3>
            ${`<p>
            ${playerOneSurname} und ${playerTwoSurname} stehen am ${eventDate} um ${plainEventName} ${eventYear} im ${eventDay}-Zeitplan. Lassen Sie uns die Karriere, die vergangenen Statistiken und die aktuelle Form dieser Spieler aufschlüsseln und vorhersagen, wer den Sieg erringen wird.
            </p>`.replace(/\n/g, " ")}
            <br/> <br/>
            <h3>Wer wird in diesem direkten Duell gewinnen?</h3>
            <p>${paraphrasedBlog && paraphrasedBlog?.replace(/^"|"$/g, '')}</p>
            <br/> <br/>
            <h3>Mein Wett-Tipps & Prognosen:</h3>
            <p>
               <b>Mein Tipp ist, dass ${playerOneSurname} gewinnt.</b>
               Matchstat.com verfügt über ein Vorhersagemodell mit künstlicher Intelligenz (KI), das auf allen vergangenen professionellen ATP- und WTA-Spielen trainiert wird. 
               Um herauszufinden, wer laut unserem Modell für ${playerOne} vs. ${playerTwo} gewinnen wird, schauen Sie hier:
               <br/>
               <a href="https://matchstat.com/tennis/h2h-odds-bets/${player1slug}/${player2slug}/" target="_blank">
                  <b>Matchstat.com ${playerOne} vs ${playerTwo} Wett-Tipps & Prognosen.</b>
               </a> 
            </p>
            </div>
            `
      }
   },
   {
      language: "Italian",
      languageCode: "it",
      category: "Pronostici Tennis WTA / ATP",
      categoryId: 4379,
      title: "Chi Vincerà #playerOneSurname Contro #playerTwoSurname? Pronostici Per ATP #eventName #eventYear",
      playerTag: "#playerName Pronostici",
      eventTag: "ATP #eventName Pronostici",
      contents: function (eventName,
         leads,
         eventAddress,
         playerOne,
         playerTwo,
         eventDate,
         eventHeading2,
         eventRound,
         eventDay,
         paraphrasedBlog,
         player1slug,
         player2slug,
         imgWrapper,
         playerOneSurname,
         playerTwoSurname,
         eventYear,
         plainEventName) {

         return `<div style="padding-bottom: 5px;">
            <div style="display: flex; flex-direction: row; gap: 6px;">${imgWrapper?.join("")}</div>
            <br/>
            <h3>A che ora giocherà ${playerOne} contro ${playerTwo}?</h3>
            ${`<p>
            ${playerOneSurname} e ${playerTwoSurname} sono nel programma dell'${eventDay} al ${plainEventName} ${eventYear} il ${eventDate}. Analizziamo la carriera, le statistiche passate e la forma recente di questi giocatori e pronostici chi otterrà la vittoria.
            </p>`.replace(/\n/g, " ")}
            <br/> <br/>
            <h3>Chi vincerà in questo testa a testa?</h3>
            <p>${paraphrasedBlog && paraphrasedBlog?.replace(/^"|"$/g, '')}</p>
            <br/> <br/>
            <h3>La Mia Conclusione / Pronostici:</h3>
            <p>
               <b>La mia scelta è che ${playerOneSurname} vincerà.</b>
               Matchstat.com dispone di un modello di previsione dell'intelligenza artificiale (Ai) addestrato su tutte le partite passate dell'ATP e WTA professionistiche. 
               Per scoprire chi secondo il nostro modello vincerà ${playerOne} contro ${playerTwo}, dai un'occhiata qui:
               <br/>
               <a href="https://matchstat.com/tennis/h2h-odds-bets/${player1slug}/${player2slug}/" target="_blank">
                  <b>Pronostico di Matchstat.com ${playerOne} vs ${playerTwo}.</b>
               </a> 
            </p>
            </div>`
      }
   },
   {
      language: "Polish",
      languageCode: "pl",
      category: "Prognozy Tenisowe WTA / ATP",
      categoryId: 4380,
      title: "Kto Wygra #playerOneSurname Kontra #playerTwoSurname? Prognozy Dla ATP #eventName #eventYear",
      playerTag: "Prognozy #playerName",
      eventTag: "Prognozy ATP #eventName",
      contents: function (eventName,
         leads,
         eventAddress,
         playerOne,
         playerTwo,
         eventDate,
         eventHeading2,
         eventRound,
         eventDay,
         paraphrasedBlog,
         player1slug,
         player2slug,
         imgWrapper,
         playerOneSurname,
         playerTwoSurname,
         eventYear,
         plainEventName) {

         return `<div style="padding-bottom: 5px;">
          <div style="display: flex; flex-direction: row; gap: 6px;">${imgWrapper?.join("")}</div>
          <br/>
          <h3>O której godzinie ${playerOne} zagra z ${playerTwo}?</h3>
          ${`<p>
          ${playerOneSurname} i ${playerTwoSurname} pojawią się w harmonogramie ${eventDay} o godzinie ${plainEventName} ${eventYear} w dniu ${eventDate}. Przeanalizujmy karierę, przeszłe statystyki i obecną formę tych graczy i przewidźmy, kto odniesie zwycięstwo.
          </p>`.replace(/\n/g, " ")}
          <br/> <br/>
          <h3>Kto wygra w tym pojedynku?</h3>
          <p>${paraphrasedBlog && paraphrasedBlog?.replace(/^"|"$/g, '')}</p>
          <br/> <br/>
          <h3>Mój Wniosek / Prognozy:</h3>
          <p>
             <b>Mój typ jest taki, że wygra ${playerOneSurname}.</b>
             Matchstat.com posiada model przewidywania sztucznej inteligencji (Ai), który jest trenowany na wszystkich przeszłych profesjonalnych meczach ATP i WTA. 
             Aby dowiedzieć się, kto według naszego modelu wygra walkę ${playerOne} vs ${playerTwo}, spójrz tutaj:
             <br/>
             <a href="https://matchstat.com/tennis/h2h-odds-bets/${player1slug}/${player2slug}/" target="_blank">
                <b>Prognozy Matchstat.com ${playerOne} vs ${playerTwo}.</b>
             </a> 
          </p>
          </div>`
      }
   },
   {
      language: "Dutch",
      languageCode: "nl",
      category: "WTA / ATP-tennisvoorspellingen",
      categoryId: 4381,
      title: "Wie Wint #playerOneSurname Versus #playerTwoSurname? Voorspelling Wedtips Voor ATP #eventName #eventYear",
      playerTag: "#playerName Wedtips",
      eventTag: "ATP #eventName-voorspellingen Wedtips",
      contents: function (eventName,
         leads,
         eventAddress,
         playerOne,
         playerTwo,
         eventDate,
         eventHeading2,
         eventRound,
         eventDay,
         paraphrasedBlog,
         player1slug,
         player2slug,
         imgWrapper,
         playerOneSurname,
         playerTwoSurname,
         eventYear,
         plainEventName) {

         return `<div style="padding-bottom: 5px;">
         <div style="display: flex; flex-direction: row; gap: 6px;">${imgWrapper?.join("")}</div>
         <br/>
         <h3>Hoe laat speelt ${playerOne} tegen ${playerTwo}?</h3>
         ${`<p>
         ${playerOneSurname} en ${playerTwoSurname} staan ​​op het ${eventDay} schema om ${plainEventName} ${eventYear} op ${eventDate}. Laten we de carrière, statistieken uit het verleden en de recente vorm van deze spelers uitsplitsen en voorspellen wie de overwinning zal behalen.
         </p>`.replace(/\n/g, " ")}
         <br/> <br/>
         <h3>Wie zal winnen in deze onderlinge strijd?</h3>
         <p>${paraphrasedBlog && paraphrasedBlog?.replace(/^"|"$/g, '')}</p>
         <br/> <br/>
         <h3>Mijn Conclusie / Wedtips:</h3>
         <p>
            <b>Mijn keuze is dat ${playerOneSurname} zal winnen.</b>
            Matchstat.com heeft een voorspellingsmodel voor kunstmatige intelligentie (Ai) dat is getraind op alle professionele ATP- en WTA-wedstrijden uit het verleden. 
            Om erachter te komen wie volgens ons model zal winnen voor ${playerOne} versus ${playerTwo}, kijk hier:
            <br/>
            <a href="https://matchstat.com/tennis/h2h-odds-bets/${player1slug}/${player2slug}/" target="_blank">
               <b>Matchstat.com ${playerOne} versus ${playerTwo} Wedtips.</b>
            </a> 
         </p>
         </div>`
      }
   },
   {
      language: "Turkish",
      languageCode: "tr",
      category: "WTA / ATP Tenis Tahminleri",
      categoryId: 4382,
      title: "#playerOneSurname vs #playerTwoSurname'i Kim Kazanacak? ATP Için Tahmin #eventName #eventYear",
      playerTag: "#playerName Tahminler",
      eventTag: "ATP #eventName Tahminleri",
      contents: function (eventName,
         leads,
         eventAddress,
         playerOne,
         playerTwo,
         eventDate,
         eventHeading2,
         eventRound,
         eventDay,
         paraphrasedBlog,
         player1slug,
         player2slug,
         imgWrapper,
         playerOneSurname,
         playerTwoSurname,
         eventYear,
         plainEventName) {

         return `<div style = "padding-bottom: 5px;">
         <div style="display: flex; flex-direction: row; gap: 6px;">${imgWrapper?.join("")}</div>
         <br/>
         <h3>${playerOne}, ${playerTwo}'a Karşı Ne Zaman Oynayacak?</h3>
         ${`<p>
         ${playerOneSurname} ve ${playerTwoSurname}, ${eventDate} tarihinde ${plainEventName} ${eventYear} ${eventDay} Programında yer alıyor. Bu oyuncuların kariyerlerini, geçmiş istatistiklerini ve son formlarını inceleyelim ve zaferi kimin kazanacağını tahmin edelim.
         </p>`.replace(/\n/g, " ")}
         <br/> <br/>
         <h3>Bu Karşılıklı Mücadelede Kim Kazanacak?</h3>
         <p>${paraphrasedBlog && paraphrasedBlog?.replace(/^"|"$/g, '')}</p>
         <br/> <br/>
         <h3>Sonucum / Tahminleri:</h3>
         <p>
            <b>Benim tahminim ${playerOneSurname}'ın kazanacağı yönünde.</b>
            Matchstat.com, tüm profesyonel ATP ve WTA geçmiş maçları üzerine eğitilmiş bir Yapay Zeka (Ai) tahmin modeline sahiptir. 
            Modelimizin ${playerOne} karşısında ${playerTwo} karşısında kimin kazanacağını düşündüğünü öğrenmek için buraya bir göz atın:
            <br/>
            <a href="https://matchstat.com/tennis/h2h-odds-bets/${player1slug}/${player2slug}/" target="_blank">
               <b>Matchstat.com ${playerOne} - ${playerTwo} tahmini.</b>
            </a> 
         </p>
         </div>`
      }
   },
   {
      language: "Chinese Mandarin",
      languageCode: "zh",
      category: "WTA / ATP 网球预测",
      categoryId: 4383,
      title: "谁会赢得#playerOneSurname vs #playerTwoSurname？ ATP 预测 #eventName #eventYear",
      playerTag: "#playerName 预测",
      eventTag: "ATP #eventName 预测",
      contents: function (eventName,
         leads,
         eventAddress,
         playerOne,
         playerTwo,
         eventDate,
         eventHeading2,
         eventRound,
         eventDay,
         paraphrasedBlog,
         player1slug,
         player2slug,
         imgWrapper,
         playerOneSurname,
         playerTwoSurname,
         eventYear,
         plainEventName) {

         return `<div style="padding-bottom: 5px;">
         <div style="display: flex; flex-direction: row; gap: 6px;">${imgWrapper?.join("")}</div>
         <br/>
         <h3>${playerOne} 何时对阵 ${playerTwo}？</h3>
         ${`<p>
         ${playerOneSurname} 和 ${playerTwoSurname} 的 ${eventDay} 日程表将于 ${eventDate} ${plainEventName} ${eventYear} 进行。让我们分析一下这些球员的职业生涯、过去的统计数据和最近的表现，并预测谁将获得胜利。
         </p>`.replace(/\n/g, " ")}
         <br/> <br/>
         <h3>谁会在这场正面交锋中获胜？</h3>
         <p>${paraphrasedBlog && paraphrasedBlog?.replace(/^"|"$/g, '')}</p>
         <br/> <br/>
         <h3>我的结论 / 预测：</h3>
         <p>
            <b>我的选择是 ${playerOneSurname} 将获胜。</b> 
            Matchstat.com 拥有一个人工智能 (Ai) 预测模型，该模型经过所有职业 ATP 和 WTA 过去比赛的训练。 
            要了解我们的模型认为谁会赢得 ${playerOne} 与 ${playerTwo} 的比赛，请查看此处：
            <br/>
            <a href="https://matchstat.com/tennis/h2h-odds-bets/${player1slug}/${player2slug}/" target="_blank">
               <b>Matchstat.com ${playerOne} vs ${playerTwo} 预测。</b>
            </a> 
         </p>
         </div>`
      }
   },
   {
      language: "Arabic",
      languageCode: "ar",
      category: "توقعات اتحاد لاعبي التنس المحترفين للتنس",
      categoryId: 4384,
      title: "من سيفوز بـ #playerOneSurname مقابل #playerTwoSurname؟ التنبؤ لـ ATP #eventName #eventYear",
      playerTag: "#playerName توقعات اسم اللاعب",
      eventTag: "ATP #eventName の予測",
      contents: function (eventName,
         leads,
         eventAddress,
         playerOne,
         playerTwo,
         eventDate,
         eventHeading2,
         eventRound,
         eventDay,
         paraphrasedBlog,
         player1slug,
         player2slug,
         imgWrapper,
         playerOneSurname,
         playerTwoSurname,
         eventYear,
         plainEventName) {

         return `<div style="padding-bottom: 5px;">
         <div style="display: flex; flex-direction: row; gap: 6px;">${imgWrapper?.join("")}</div>
         <br/>
         <h3>في أي وقت سيلعب ${playerOne} ضد ${playerTwo}؟</h3>
         ${`<p>
         ${playerOneSurname} و${playerTwoSurname} موجودان في جدول ${eventDay} في ${plainEventName} ${eventYear} في ${eventDate}. دعونا نفصل المهنة والإحصائيات السابقة والشكل الأخير لهؤلاء اللاعبين ونتوقع من سيحقق النصر.
         </p>`.replace(/\n/g, " ")}
         <br/> <br/>
         <h3>من سيفوز في هذه المواجهة المباشرة؟</h3>
         <p>${paraphrasedBlog && paraphrasedBlog?.replace(/^"|"$/g, '')}</p>
         <br/> <br/>
         <h3>استنتاجي / توقعي:</h3>
         <p>
           <b> خياري هو أن ${playerOneSurname} هو الذي سيفوز. يحتوي موقع </b>
           Matchstat.com على نموذج للتنبؤ بالذكاء الاصطناعي (Ai) يتم تدريبه على جميع مباريات ATP وWTA الاحترافية السابقة. 
            لمعرفة من يعتقد نموذجنا أنه سيفوز في ${playerOne} مقابل ${playerTwo}، ألقِ نظرة هنا:
            <br/>
            <a href="https://matchstat.com/tennis/h2h-odds-bets/${player1slug}/${player2slug}/" target="_blank">
               <b>توقع Matchstat.com ${playerOne} مقابل ${playerTwo}.</b>
            </a> 
         </p>
         </div>`
      }
   },
   {
      language: "Japanese",
      languageCode: "ja",
      category: "WTA / ATPテニスの予想",
      categoryId: 4385,
      title: "#playerOneSurname と #playerTwoSurname のどちらが勝ちますか? ATP の予測 #eventName #eventYear",
      playerTag: "#playerName の予測",
      eventTag: "ATP #eventName の予測",
      contents: function (eventName,
         leads,
         eventAddress,
         playerOne,
         playerTwo,
         eventDate,
         eventHeading2,
         eventRound,
         eventDay,
         paraphrasedBlog,
         player1slug,
         player2slug,
         imgWrapper,
         playerOneSurname,
         playerTwoSurname,
         eventYear,
         plainEventName) {

         return `<div style="padding-bottom: 5px;">
         <div style="display: flex; flex-direction: row; gap: 6px;">${imgWrapper?.join("")}</div>
         <br/>
         <h3>${playerOne} は ${playerTwo} と何時に対戦しますか?</h3>
         ${`<p>
         ${playerOneSurname} と ${playerTwoSurname} は、${eventDate} の ${plainEventName} ${eventYear} の ${eventDay} スケジュールに参加しています。これらの選手のキャリア、過去の統計、最近の調子を分析し、誰が勝利を得るのかを予想してみましょう。
         </p>`.replace(/\n/g, " ")}
         <br/> <br/>
         <h3>この直接対決で勝つのは誰ですか?</h3>
         <p>${paraphrasedBlog && paraphrasedBlog?.replace(/^"|"$/g, '')}</p>
         <br/> <br/>
         <h3>私の結論 / 予測:</h3>
         <p>
            <b>私の選択は、${playerOneSurname} が勝つということです。</b>
            Matchstat.com には、ATP と WTA の過去のすべてのプロの試合でトレーニングされた人工知能 (Ai) 予測モデルがあります。 
            私たちのモデルが ${playerOne} と ${playerTwo} でどちらが勝つと考えているかを確認するには、ここをご覧ください。
            <br/>
            <a href="https://matchstat.com/tennis/h2h-odds-bets/${player1slug}/${player2slug}/" target="_blank">
               <b>Matchstat.com ${playerOne} 対 ${playerTwo} の予測。</b>
            </a> 
         </p>
         </div>`
      }
   },
   {
      language: "Russian",
      languageCode: "ru",
      category: "Прогнозы WTA / ATP на теннис",
      categoryId: 4386,
      title: "Кто победит #playerOneSurname против #playerTwoSurname? Прогноз для ATP #eventName #eventYear",
      playerTag: "#playerName Прогнозы",
      eventTag: "Прогнозы ATP #eventName",
      contents: function (eventName,
         leads,
         eventAddress,
         playerOne,
         playerTwo,
         eventDate,
         eventHeading2,
         eventRound,
         eventDay,
         paraphrasedBlog,
         player1slug,
         player2slug,
         imgWrapper,
         playerOneSurname,
         playerTwoSurname,
         eventYear,
         plainEventName) {

         return `<div style="padding-bottom: 5px;">
         <div style="display: flex; flex-direction: row; gap: 6px;">${imgWrapper?.join("")}</div>
         <br/>
         <h3>В какое время ${playerOne} сыграет против ${playerTwo}?</h3>
         ${`<p>
         ${playerOneSurname} и ${playerTwoSurname} включены в расписание ${eventDay} в ${plainEventName} ${eventYear} ${eventDate}. Давайте разберем карьеру, прошлую статистику и недавнюю форму этих игроков и предскажем, кто одержит победу.
         </p>`.replace(/\n/g, " ")}
         <br/> <br/>
         <h3>Кто победит в этом противостоянии?</h3>
         <p>${paraphrasedBlog && paraphrasedBlog?.replace(/^"|"$/g, '')}</p>
         <br/> <br/>
         <h3>Мой вывод / прогноз:</h3>
         <p>
            <b>Я считаю, что победит ${playerOneSurname}.</b>
            Matchstat.com имеет модель прогнозирования на основе искусственного интеллекта (Ai), которая обучена на всех прошлых матчах профессиональных турниров ATP и WTA. 
            Чтобы узнать, кто, по мнению нашей модели, победит в матче ${playerOne} против ${playerTwo}, посмотрите здесь:
            <br/>
            <a href="https://matchstat.com/tennis/h2h-odds-bets/${player1slug}/${player2slug}/" target="_blank">
               <b>Прогноз Matchstat.com: ${playerOne} против ${playerTwo}.</b>
            </a> 
         </p>
         </div>`
      }
   },
   {
      language: "Hindi",
      languageCode: "hi",
      category: "एटीपी टेनिस भविष्यवाणियाँ",
      categoryId: 4387,
      title: "#playerOneSurname बनाम #playerTwoSurname कौन जीतेगा? एटीपी #eventName #eventYear के लिए भविष्यवाणी",
      playerTag: "#playerName भविष्यवाणी",
      eventTag: "एटीपी #eventName भविष्यवाणियां",
      contents: function (eventName,
         leads,
         eventAddress,
         playerOne,
         playerTwo,
         eventDate,
         eventHeading2,
         eventRound,
         eventDay,
         paraphrasedBlog,
         player1slug,
         player2slug,
         imgWrapper,
         playerOneSurname,
         playerTwoSurname,
         eventYear,
         plainEventName) {

         return `<div style='padding-bottom: 5px;'>
         <div style="display: flex; flex-direction: row; gap: 6px;">${imgWrapper?.join('')}</div>
         <br/>
         <h3>${playerOne} किस समय ${playerTwo} के विरुद्ध खेलेगा?</h3>
         ${`<p>
         ${playerOneSurname} और ${playerTwoSurname} ${eventDate} को ${plainEventName} ${eventYear} पर ${eventDay} शेड्यूल पर हैं। आइए इन खिलाड़ियों के करियर, पिछले आंकड़ों और हालिया फॉर्म का विश्लेषण करें और भविष्यवाणी करें कि जीत किसे मिलेगी।
         </p>`.replace(/\n/g, " ")}
         <br/> <br/>
         <h3>इस आमने-सामने की लड़ाई में कौन जीतेगा?</h3>
         <p>${paraphrasedBlog && paraphrasedBlog?.replace(/^"|"$/g, '')}</p>
         <br/> <br/>
         <h3>मेरा निष्कर्ष / भविष्यवाणी:</h3>
         <p>
            <b>मेरी पसंद यह है कि ${playerOneSurname} जीतेगा। </b>
            मैचस्टैट.कॉम के पास एक आर्टिफिशियल इंटेलिजेंस (एआई) भविष्यवाणी मॉडल है जो सभी पेशेवर एटीपी और डब्ल्यूटीए पिछले मैचों पर प्रशिक्षित है। 
            यह जानने के लिए कि हमारा मॉडल ${playerOne} बनाम ${playerTwo} के लिए कौन जीतेगा, यहां देखें:
            <br/>
            <a href='https://matchstat.com/tennis/h2h-odds-bets/${player1slug}/${player2slug}/' target='_blank'>
               <b>Matchstat.com ${playerOne} बनाम ${playerTwo} भविष्यवाणी।</b>
            </a> 
         </p>
         </div>`
      }
   }
];

module.exports = matchstats