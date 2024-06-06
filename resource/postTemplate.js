const postTemplateSg = [
   {
      language: "English",
      languageCode: "en",
      category: "ATP / WTA Tennis Predictions",
      categoryId: 8996,
      title: "#eventName Predictions: #playerOne vs #playerTwo - #eventDate",
      playerTag: "#playerName Predictions",
      eventTag: "#eventName ATP Tennis Predictions",
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
         imgWrapper) {
         return `<div style="padding-bottom: 5px;">
         <h2 style="margin-top: unset;">ATP ${eventName}</h2>
         <p>${eventHeading2}</p>
         </div>
         
         <div style="display: flex; flex-direction: row;">${imgWrapper?.join("")}</div>
         
         <div style="margin: 15px 0">
         <ul>
         <li>The match up: ${playerOne} vs ${playerTwo}</li>
         <li>Event Name: ${eventName}</li>
         <li>Match Date: ${eventDate}</li>
         ${eventRound ? `<li>Match Round: ${eventRound}</li>` : ""}
         <li>Day Of Event: ${eventDay}</li>
         <li>Event Address: ${eventAddress}</li>
         </ul>
         </div>
         
         ${`<p>
         The ${eventName} continues with plenty of interesting matches on the ${eventDay} schedule. 
         Let's have a look at all the career, performance and head-to-head stats for the match and find out if ${playerOne} or ${playerTwo} is expected to win.
         </p>`.replace(/\n/g, " ")}
         
         <br/> <br/>
         
         <h3>Match Details:</h3>
         <p>${playerOne} vs ${playerTwo}${eventRound ? " - " + eventRound + " - " : " - "}${eventDate} - ${eventName} - ${eventAddress}</p>
         
         <br/>
         <p>
            <a href="https://www.stevegtennis.com/h2h-predictions/plans-match-winner-pro-monthly/" title="Tennis Premium Subscription" style="text-align: center; display: block;"> <picture>
               <source media="(max-width: 899px)" srcset="https://www.stevegtennis.com/assets/images/tennis-subscription-plans-sm_v2.webp">
               <source media="(min-width: 900px)" srcset="https://www.stevegtennis.com/assets/images/tennis-subscription-plans_v2.webp">
               <img decoding="async" src="https://www.stevegtennis.com/assets/images/tennis-subscription-plans_v2.webp" style="max-width: 640px; width:100%;" alt="Subscription Plans">
               </picture>
            </a>
         </p>
         <br/>
         
         <h3>${playerOne} vs ${playerTwo} Head-to-Head, Preview, Stats & Pick:</h3>
         <article>
         <h5>Head To Head ${leads}.</h5>
         <br/>
         <p>${paraphrasedBlog && paraphrasedBlog?.replace(/^"|"$/g, '')}</p>
         </article>
         
         <br/> <br/>
         
         <h3>${playerOne} vs ${playerTwo} Prediction:</h3>
         
         <p>
            I believe ${playerOne} will win in straight sets. 
            The Stevegtennis.com prediction algorithm has a much better success rate in picking 
            match winners than me!\n
            So check out who it picks for this match here: <a href="https://www.stevegtennis.com/head-to-head/men/${player1slug}/${player2slug}/" target="_blank">
            Stevegtennis.com ${playerOne} vs ${playerTwo} prediction.
            </a> 
         </p>`
      }
   },
   {
      language: "Spanish",
      languageCode: "es",
      category: "Pronósticos De Tenis ATP / WTA",
      categoryId: 9262,
      title: "Pronósticos de #eventName: #playerOne vs #playerTwo - #eventDate",
      playerTag: "Pronósticos de #playerName",
      eventTag: "#eventName Pronósticos De Tenis ATP",
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
         imgWrapper) {

         return `<div style="padding-bottom: 5px;">
        <h2 style="margin-top: unset;">${eventName}</h2>
        <p>${eventHeading2}</p>
    </div>
    
    <div style="display: flex; flex-direction: row;">
        ${imgWrapper?.join("")}
    </div>
    
    <div style="margin: 15px 0;">
        <ul>
            <li>El enfrentamiento: ${playerOne} contra ${playerTwo}</li>
            <li>Nombre del evento: ${eventName}</li>
            <li>Fecha del partido: ${eventDate}</li>
            ${eventRound ? `<li>Ronda de partido: ${eventRound}</li>` : ""}
            <li>Día del evento: ${eventDay}</li>
            <li>Dirección del evento: ${eventAddress}</li>
        </ul>
    </div>
    
    ${`<p>
        El ${eventName} de continúa con muchos partidos interesantes en el calendario de ${eventDay}. 
        Echemos un vistazo a todas las estadísticas de carrera, rendimiento y enfrentamientos directos del partido y descubramos si se espera que ${playerOne} o ${playerTwo} ganen.
    </p>`.replace(/\n/g, " ")}
    
    <br/> <br/>
    
    <h3>Detalles del partido:</h3>
    <p>${playerOne} frente a ${playerTwo}${eventRound ? " - " + eventRound + " - " : " - "}${eventDate} - ${eventName} - ${eventAddress}</p>
    
    <br/>
     <p>
        <a href="https://www.stevegtennis.com/h2h-predictions/plans-match-winner-pro-monthly/" title="Tennis Premium Subscription" style="text-align: center; display: block;"> <picture>
           <source media="(max-width: 899px)" srcset="https://www.stevegtennis.com/assets/images/tennis-subscription-plans-sm_v2.webp">
           <source media="(min-width: 900px)" srcset="https://www.stevegtennis.com/assets/images/tennis-subscription-plans_v2.webp">
           <img decoding="async" src="https://www.stevegtennis.com/assets/images/tennis-subscription-plans_v2.webp" style="max-width: 640px; width:100%;" alt="Subscription Plans">
           </picture>
        </a>
     </p>
     <br/>
    
    <h3>${playerOne} vs ${playerTwo} cara a cara, vista previa, estadísticas y selección:</h3>
    <article>
        <h5>Enfrentamiento ${leads}.</h5>
        <br/>
        <p>${paraphrasedBlog && paraphrasedBlog?.replace(/^"|"$/g, '')}</p>
    </article>
    
    <br/> <br/>
    
    <h3>Pronóstico ${playerOne} vs ${playerTwo}:</h3>
    
    <p>
        Creo que ${playerOne} ganará en sets corridos. 
        El algoritmo de Pronóstico de Stevegtennis.com tiene una tasa de éxito mucho mayor al elegir 
        Ganadores del partido que yo!\n
        Así que mira a quién elige para este partido aquí: <a href="https://www.stevegtennis.com/head-to-head/men/${player1slug}/${player2slug}/" target="_blank" >
        Stevegtennis.com ${playerOne} vs ${playerTwo} Pronóstico.
        </a> 
    </p>`

      }
   },
   {
      language: "Portuguese",
      languageCode: "pt",
      category: "Palpites Tênis ATP / WTA",
      categoryId: 9263,
      title: "Palpites de #eventName: #playerOne vs #playerTwo - #eventDate",
      playerTag: "Palpites de #playerName",
      eventTag: "#eventName Palpites Tênis ATP",
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
         imgWrapper) {

         return `<div style="padding-bottom: 5px;">
        <h2 style="margin-top: unset;">${eventName}</h2>
        <p>${eventHeading2}</p>
    </div>
    
    <div style="display: flex; flex-direction: row;">
        ${imgWrapper?.join("")}
    </div>
    
    <div style="margin: 15px 0;">
        <ul>
            <li>O confronto: ${playerOne} vs ${playerTwo}</li>
            <li>Nome do evento: ${eventName}</li>
            <li>Data da partida: ${eventDate}</li>
            ${eventRound ? `<li>Rodada da partida: ${eventRound}</li>` : ""}
            <li>Dia do evento: ${eventDay}</li>
            <li>Endereço do evento: ${eventAddress}</li>
        </ul>
    </div>
    
    ${`<p>
        O ${eventName} continua com muitas partidas interessantes na programação do ${eventDay}. 
        Vamos dar uma olhada em todas as estatísticas de carreira, desempenho e confrontos diretos da partida e descobrir se ${playerOne} ou ${playerTwo} devem vencer.
    </p>`.replace(/\n/g, " ")}
    
    <br/> <br/>
    
    <h3>Detalhes da partida:</h3>
    <p>${playerOne} vs ${playerTwo}${eventRound ? " - " + eventRound + " - " : " - "}${eventDate} - ${eventName} - ${eventAddress}</p>
    
    <br/>
        <p>
           <a href="https://www.stevegtennis.com/h2h-predictions/plans-match-winner-pro-monthly/" title="Tennis Premium Subscription" style="text-align: center; display: block;"> <picture>
              <source media="(max-width: 899px)" srcset="https://www.stevegtennis.com/assets/images/tennis-subscription-plans-sm_v2.webp">
              <source media="(min-width: 900px)" srcset="https://www.stevegtennis.com/assets/images/tennis-subscription-plans_v2.webp">
              <img decoding="async" src="https://www.stevegtennis.com/assets/images/tennis-subscription-plans_v2.webp" style="max-width: 640px; width:100%;" alt="Subscription Plans">
              </picture>
           </a>
        </p>
        <br/>
    
    <h3>${playerOne} vs ${playerTwo} confronto direto, visualização, estatísticas e escolha:</h3>
    <article>
        <h5>Confronto direto ${leads}.</h5>
        <br/>
        <p>${paraphrasedBlog && paraphrasedBlog?.replace(/^"|"$/g, '')}</p>
    </article>
    
    <br/> <br/>
    
    <h3>${playerOne} vs ${playerTwo} Palpites:</h3>
    
    <p>
        Acredito que ${playerOne} vencerá em dois sets. 
        O algoritmo de previsão Stevegtennis.com tem uma taxa de sucesso muito melhor na escolha 
        vencedores das partidas do que eu!\n
        Então confira quem será escolhido para esta partida aqui: <a href="https://www.stevegtennis.com/head-to-head/men/${player1slug}/${player2slug}/" target="_blank" >
        Stevegtennis.com Palpites de ${playerOne} vs ${playerTwo}.
        </a> 
    </p>`

      }
   },
   {
      language: "French",
      languageCode: "fr",
      category: "Pronostics Tennis ATP / WTA",
      categoryId: 9264,
      title: "Pronostics #eventName: #playerOne contre #playerTwo - #eventDate",
      playerTag: "Pronostics #playerName",
      eventTag: "#eventName Pronostics Tennis ATP",
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
         imgWrapper) {

         return `<div style="padding-bottom: 5px;">
        <h2 style="margin-top: unset;">${eventName}</h2>
        <p>${eventHeading2}</p>
    </div>
    
    <div style="display: flex; flex-direction: row;">
        ${imgWrapper?.join("")}
    </div>
    
    <div style="margin: 15px 0;">
        <ul>
            <li>Le match : ${playerOne} contre ${playerTwo}</li>
            <li>Nom de l'événement : ${eventName}</li>
            <li>Date du match : ${eventDate}</li>
            ${eventRound ? `<li>Tour de match : ${eventRound}</li>` : ""}
            <li>Jour de l'événement : ${eventDay}</li>
            <li>Adresse de l'événement : ${eventAddress}</li>
        </ul>
    </div>
    
    ${`<p>
        Le ${eventName} se poursuit avec de nombreux matchs intéressants au programme du ${eventDay}. 
        Jetons un coup d'œil à toutes les statistiques de carrière, de performance et d'affrontement du match et découvrons si ${playerOne} ou ${playerTwo} devrait gagner.
    </p>`.replace(/\n/g, " ")}
    
    <br/> <br/>
    
    <h3>Détails du match :</h3>
    <p>${playerOne} contre ${playerTwo}${eventRound ? " - " + eventRound + " - " : " - "}${eventDate} - ${eventName} - ${eventAddress}</p>
    
    <br/>
        <p>
           <a href="https://www.stevegtennis.com/h2h-predictions/plans-match-winner-pro-monthly/" title="Tennis Premium Subscription" style="text-align: center; display: block;"> <picture>
              <source media="(max-width: 899px)" srcset="https://www.stevegtennis.com/assets/images/tennis-subscription-plans-sm_v2.webp">
              <source media="(min-width: 900px)" srcset="https://www.stevegtennis.com/assets/images/tennis-subscription-plans_v2.webp">
              <img decoding="async" src="https://www.stevegtennis.com/assets/images/tennis-subscription-plans_v2.webp" style="max-width: 640px; width:100%;" alt="Subscription Plans">
              </picture>
           </a>
        </p>
        <br/>
    
    <h3>${playerOne} contre ${playerTwo} Face-à-face, aperçu, statistiques et choix :</h3>
    <article>
        <h5>Tête à face ${leads}.</h5>
        <br/>
        <p>${paraphrasedBlog && paraphrasedBlog?.replace(/^"|"$/g, '')}</p>
    </article>
    
    <br/> <br/>
    
    <h3>Pronostic ${playerOne} contre ${playerTwo} :</h3>
    
    <p>
        Je pense que ${playerOne} gagnera en deux sets. 
        L'algorithme de Pronostic de Stevegtennis.com a un bien meilleur taux de réussite en matière de sélection 
        des gagnants de match que moi !\n
        Alors découvrez qui il choisit pour ce match ici : <a href="https://www.stevegtennis.com/head-to-head/men/${player1slug}/${player2slug}/" target="_blank" >
        Pronostics Stevegtennis.com ${playerOne} contre ${playerTwo}.
        </a> 
    </p>`

      }
   },
   {
      language: "German",
      languageCode: "de",
      category: "Tennis Tipps & Prognosen ATP / WTA",
      categoryId: 9265,
      title: "#eventName Tipps & Prognosen: #playerOne vs #playerTwo - #eventDate",
      playerTag: "#playerName Vorhersagen",
      eventTag: "#eventName Tennis Tipps & Prognosen ATP",
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
         imgWrapper) {

         return `<div style="padding-bottom: 5px;">
       <h2 style="margin-top: unset;">${eventName}</h2>
       <p>${eventHeading2}</p>
   </div>
   
   <div style="display: flex; flex-direction: row;">
       ${imgWrapper?.join("")}
   </div>
   
   <div style="margin: 15px 0;">
       <ul>
           <li>Das Match: ${playerOne} gegen ${playerTwo}</li>
           <li>Ereignisname: ${eventName}</li>
           <li>Spiel Datum: ${eventDate}</li>
           ${eventRound ? `<li>Match Round: ${eventRound}</li>` : ""}
           <li>Tag des Ereignisses: ${eventDay}</li>
           <li>Ereignisadresse: ${eventAddress}</li>
       </ul>
   </div>
   
   ${`<p>
       Das ${eventName} geht mit vielen interessanten Spielen im ${eventDay}-Zeitplan weiter. 
       Werfen wir einen Blick auf alle Karriere-, Leistungs- und Head-to-Head-Statistiken für das Spiel und finden wir heraus, ob ${playerOne} oder ${playerTwo} voraussichtlich gewinnen wird.
   </p>`.replace(/\n/g, " ")}
   
   <br/> <br/>
   
   <h3>Spieldetails:</h3>
   <p>${playerOne} vs ${playerTwo}${eventRound ? " - " + eventRound + " - " : " - "}${eventDate} - ${eventName} - ${eventAddress}</p>
   
   <br/>
       <p>
          <a href="https://www.stevegtennis.com/h2h-predictions/plans-match-winner-pro-monthly/" title="Tennis Premium Subscription" style="text-align: center; display: block;"> <picture>
             <source media="(max-width: 899px)" srcset="https://www.stevegtennis.com/assets/images/tennis-subscription-plans-sm_v2.webp">
             <source media="(min-width: 900px)" srcset="https://www.stevegtennis.com/assets/images/tennis-subscription-plans_v2.webp">
             <img decoding="async" src="https://www.stevegtennis.com/assets/images/tennis-subscription-plans_v2.webp" style="max-width: 640px; width:100%;" alt="Subscription Plans">
             </picture>
          </a>
       </p>
       <br/>
   
   <h3>${playerOne} vs. ${playerTwo} Head-to-Head, Vorschau, Statistiken & Auswahl:</h3>
   <article>
       <h5>Kopf an Kopf ${leads}.</h5>
       <br/>
       <p>${paraphrasedBlog && paraphrasedBlog?.replace(/^"|"$/g, '')}</p>
   </article>
   
   <br/> <br/>
   
   <h3>${playerOne} vs ${playerTwo} Wett-Tipps & Prognosen:</h3>
   
   <p>
       Ich glaube, dass ${playerOne} in geraden Sätzen gewinnen wird. 
       Der Doppel Tippsalgorithmus von Stevegtennis.com hat eine viel bessere Erfolgsquote bei der Auswahl 
       Matchwinner als ich!\n
       Schauen Sie sich also hier an, wer für dieses Spiel ausgewählt wird: <a href="https://www.stevegtennis.com/head-to-head/men/${player1slug}/${player2slug}/" target="_blank" >
       Stevegtennis.com ${playerOne} vs. ${playerTwo} Wett-Tipps & Prognosen.
       </a> 
   </p>`
      }
   },
   {
      language: "Italian",
      languageCode: "it",
      category: "Pronostici Tennis ATP / WTA",
      categoryId: 9266,
      title: "Pronostici su #eventName: #playerOne vs #playerTwo - #eventDate",
      playerTag: "#playerName Pronostici",
      eventTag: "#eventName Pronostici Tennis ATP",
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
         imgWrapper) {

         return `<div style="padding-bottom: 5px;">
            <h2 style="margin-top: unset;">${eventName}</h2>
            <p>${eventHeading2}</p>
          </div>
          
          <div style="display: flex; flex-direction: row;">
            ${imgWrapper?.join("")}
          </div>
          
          <div style="margin: 15px 0;">
            <ul>
              <li>La partita è: ${playerOne} contro ${playerTwo}</li>
              <li>Nome evento: ${eventName}</li>
              <li>Data della partita: ${eventDate}</li>
              ${eventRound ? `<li>Turno della partita: ${eventRound}</li>` : ""}
              <li>Giorno dell'evento: ${eventDay}</li>
              <li>Indirizzo dell'evento: ${eventAddress}</li>
            </ul>
          </div>
          
          ${`<p>
          Il ${eventName} continua con tantissime partite interessanti nel programma di ${eventDay}. 
          Diamo un'occhiata a tutte le statistiche relative a carriera, prestazioni e testa a testa della partita e scopriamo se ci si aspetta che ${playerOne} o ${playerTwo} vincano.
          </p>`.replace(/\n/g, " ")}
          
          <br/><br/>
          
          <h3>Dettagli partita:</h3>
          <p>${playerOne} contro ${playerTwo}${eventRound ? " - " + eventRound + " - " : " - "}${eventDate} - ${eventName} - ${eventAddress}</p>
          
          <br/>
          <p>
             <a href="https://www.stevegtennis.com/h2h-predictions/plans-match-winner-pro-monthly/" title="Tennis Premium Subscription" style="text-align: center; display: block;"> <picture>
                <source media="(max-width: 899px)" srcset="https://www.stevegtennis.com/assets/images/tennis-subscription-plans-sm_v2.webp">
                <source media="(min-width: 900px)" srcset="https://www.stevegtennis.com/assets/images/tennis-subscription-plans_v2.webp">
                <img decoding="async" src="https://www.stevegtennis.com/assets/images/tennis-subscription-plans_v2.webp" style="max-width: 640px; width:100%;" alt="Subscription Plans">
                </picture>
             </a>
          </p>
          <br/>
          
          <h3>Confronto testa a testa tra ${playerOne} e ${playerTwo}, anteprima, statistiche e scelta:</h3>
          <article>
            <h5>Testa a testa ${leads}.</h5>
            <br/>
            <p>${paraphrasedBlog && paraphrasedBlog?.replace(/^"|"$/g, '')}</p>
          </article>
          
          <br/></br/>
          
          <h3>Pronostico ${playerOne} vs ${playerTwo}:</h3>
          
          <p>
          Credo che ${playerOne} vincerà in due set. 
          L'algoritmo di previsione di Stevegtennis.com ha un tasso di successo molto migliore nel prelievo 
          vincitori della partita rispetto a me!\n
          Quindi controlla chi sceglie per questa partita qui: <a href="https://www.stevegtennis.com/head-to-head/men/${player1slug}/${player2slug}/" target="_blank">
          Pronostici di Stevegtennis.com ${playerOne} vs ${playerTwo}.
          </a> 
          </p>`
      }
   },
   {
      language: "Polish",
      languageCode: "pl",
      category: "Prognozy Tenis ATP / WTA",
      categoryId: 9267,
      title: "Prognozy #eventName: #playerOne vs #playerTwo - #eventDate",
      playerTag: "Prognozy #playerName",
      eventTag: "#eventName Prognozy Tenis ATP",
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
         imgWrapper) {

         return `<div style="padding-bottom: 5px;">
       <h2 style="margin-top: unset;">${eventName}</h2>
       <p>${eventHeading2}</p>
    </div>
    
    <div style="display: flex; flex-direction: row;">
       ${imgWrapper?.join("")}
    </div>
    
    <div style="margin: 15px 0;">
       <ul>
          <li>Pojedynek: ${playerOne} kontra ${playerTwo}</li>
          <li>Nazwa wydarzenia: ${eventName}</li>
          <li>Data meczu: ${eventDate}</li>
          ${eventRound ? `<li>Runda meczowa: ${eventRound}</li>` : ""}
          <li>Dzień wydarzenia: ${eventDay}</li>
          <li>Adres wydarzenia: ${eventAddress}</li>
       </ul>
    </div>
    
    ${`<p>
    ${eventName} będzie kontynuowane z mnóstwem interesujących meczów w harmonogramie ${eventDay}. 
    Rzućmy okiem na wszystkie statystyki dotyczące kariery, występów i bezpośrednich pojedynków w tym meczu i dowiedzmy się, czy wygra ${playerOne} czy ${playerTwo}.
    </p>`.replace(/\n/g, " ")}
    
    
    <br/> <br/>
    <h3>Szczegóły meczu:</h3>
    <p>${playerOne} kontra ${playerTwo}${eventRound ? " - " + eventRound + " - " : " - "}${eventDate} - ${eventName} - ${eventAddress}</p>
    
    <br/>
    <p>
       <a href="https://www.stevegtennis.com/h2h-predictions/plans-match-winner-pro-monthly/" title="Tennis Premium Subscription" style="text-align: center; display: block;"> <picture>
          <source media="(max-width: 899px)" srcset="https://www.stevegtennis.com/assets/images/tennis-subscription-plans-sm_v2.webp">
          <source media="(min-width: 900px)" srcset="https://www.stevegtennis.com/assets/images/tennis-subscription-plans_v2.webp">
          <img decoding="async" src="https://www.stevegtennis.com/assets/images/tennis-subscription-plans_v2.webp" style="max-width: 640px; width:100%;" alt="Subscription Plans">
          </picture>
       </a>
    </p>
    <br/>
    
    <h3>${playerOne} kontra ${playerTwo} bezpośrednie starcie, podgląd, statystyki i wybór:</h3>
    <article>
       <h5>Bezpośrednie ${leads}.</h5>
       <br/>
       <p>${paraphrasedBlog && paraphrasedBlog?.replace(/^"|"$/g, '')}</p>
    </article>
    
    <br/> <br/>
    
    <h3>${playerOne} vs ${playerTwo} Prognozy:</h3>
    
    <p>
    Wierzę, że ${playerOne} wygra w prostych setach. 
    Algorytm przewidywania Stevegtennis.com ma znacznie lepszy wskaźnik skuteczności kompletacji 
    zwycięzcy meczu ode mnie!\n
    Sprawdź więc, kogo wybiera na ten mecz tutaj: <a href="https://www.stevegtennis.com/head-to-head/men/${player1slug}/${player2slug}/" target="_blank">
    Prognozy Stevegtennis.com ${playerOne} vs ${playerTwo}.
    </a> 
    </p>`
      }
   },
   {
      language: "Dutch",
      languageCode: "nl",
      category: "Tennis Wedtips En Voorspellingen ATP / WTA",
      categoryId: 9268,
      title: "#eventName Voorspellingen Wedtips: #playerOne versus #playerTwo - #eventDate",
      playerTag: "#playerName Voorspellingen Wedtips",
      eventTag: "#eventName Tennis Wedtips En Voorspellingen ATP",
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
         imgWrapper) {

         return `<div style="padding-bottom: 5px;">
         <h2 style="margin-top: unset;">${eventName}</h2>
         <p>${eventHeading2}</p>
      </div>
      
      <div style="display: flex; flex-direction: row;">
         ${imgWrapper?.join("")}
      </div>
      
      <div style="margin: 15px 0;">
         <ul>
            <li>De wedstrijd: ${playerOne} versus ${playerTwo}</li>
            <li>Gebeurtenisnaam: ${eventName}</li>
            <li>Wedstrijddatum: ${eventDate}</li>
            ${eventRound ? `<li>Wedstrijdronde: ${eventRound}</li>` : ""}
            <li>Dag van het evenement: ${eventDay}</li>
            <li>Evenementadres: ${eventAddress}</li>
         </ul>
      </div>
      
      ${`<p>
      De ${eventName} gaat verder met veel interessante wedstrijden op het ${eventDay} schema. 
      Laten we eens kijken naar alle carrière-, prestatie- en onderlinge statistieken voor de wedstrijd en kijken of ${playerOne} of ${playerTwo} naar verwachting zal winnen.
      </p>`.replace(/\n/g, " ")}
      
      <br/> <br/>
      
      <h3>Wedstrijddetails:</h3>
      <p>${playerOne} versus ${playerTwo}${eventRound ? " - " + eventRound + " - " : " - "}${eventDate} - ${eventName} - ${eventAddress}</p>
      
      <br/>
      <p>
         <a href="https://www.stevegtennis.com/h2h-predictions/plans-match-winner-pro-monthly/" title="Tennis Premium Subscription" style="text-align: center; display: block;"> <picture>
            <source media="(max-width: 899px)" srcset="https://www.stevegtennis.com/assets/images/tennis-subscription-plans-sm_v2.webp">
            <source media="(min-width: 900px)" srcset="https://www.stevegtennis.com/assets/images/tennis-subscription-plans_v2.webp">
            <img decoding="async" src="https://www.stevegtennis.com/assets/images/tennis-subscription-plans_v2.webp" style="max-width: 640px; width:100%;" alt="Subscription Plans">
            </picture>
         </a>
      </p>
      <br/>
      
      <h3>${playerOne} versus ${playerTwo} Head-to-Head, preview, statistieken en keuze:</h3>
      <article>
         <h5>Head to Head ${leads}.</h5>
         <br/>
         <p>${paraphrasedBlog && paraphrasedBlog?.replace(/^"|"$/g, '')}</p>
      </article>
      
      <br/> <br/>
      
      <h3>${playerOne} versus ${playerTwo} Voorspelling / Wedtips:</h3>
      
      <p>
      Ik geloof dat ${playerOne} in twee sets zal winnen. 
      Het voorspellingsalgoritme van Stevegtennis.com heeft een veel beter succespercentage bij het kiezen 
      wedstrijdwinnaars dan ik!\n
      Bekijk hier dus wie er voor deze wedstrijd wordt uitgekozen: <a href="https://www.stevegtennis.com/head-to-head/men/${player1slug}/${player2slug}/" target="_blank">
      Stevegtennis.com ${playerOne} versus ${playerTwo} voorspelling Wedtips.
      </a> 
      </p>`
      }
   },
   {
      language: "Turkish",
      languageCode: "tr",
      category: "Tenis Tahminleri ATP / WTA",
      categoryId: 9269,
      title: "#eventName Tahminler: #playerOne vs #playerTwo - #eventDate",
      playerTag: "#playerName Tahminleri",
      eventTag: "#eventName Tenis Tahminleri ATP",
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
         imgWrapper) {

         return `<div style="padding-bottom: 5px;">
         <h2 style="margin-top: unset;">${eventName}</h2>
         <p>${eventHeading2}</p>
      </div>
      
      <div style="display: flex; flex-direction: row;">
         ${imgWrapper?.join("")}
      </div>
      
      <div style="margin: 15px 0;">
         <ul>
            <li>Eşleşme: ${playerOne} ile ${playerTwo}</li>
            <li>Etkinlik Adı: ${eventName}</li>
            <li>Maç Tarihi: ${eventDate}</li>
            ${eventRound ? `<li>Maç Turu: ${eventRound}</li>` : ""}
            <li>Etkinlik Günü: ${eventDay}</li>
            <li>Etkinlik Adresi: ${eventAddress}</li>
         </ul>
      </div>
      
      ${`<p>
      ${eventName}, ${eventDay} programında birçok ilginç maçla devam ediyor. 
      Maçın tüm kariyer, performans ve kafa kafaya istatistiklerine bir göz atalım ve ${playerOne}'ın mı yoksa ${playerTwo}'un mu kazanmasının beklendiğini öğrenelim.
      </p>`.replace(/\n/g, " ")}
      
      <br/><br/>
      
      <h3>Eşleşme Ayrıntıları:</h3>
      <p>${playerOne} vs ${playerTwo}${eventRound ? " - " + eventRound + " - " : " - "}${eventDate} - ${eventName} - ${eventAddress}</p>
      
      <br/>
      <p>
         <a href="https://www.stevegtennis.com/h2h-predictions/plans-match-winner-pro-monthly/" title="Tennis Premium Subscription" style="text-align: center; display: block;"> <picture>
            <source media="(max-width: 899px)" srcset="https://www.stevegtennis.com/assets/images/tennis-subscription-plans-sm_v2.webp">
            <source media="(min-width: 900px)" srcset="https://www.stevegtennis.com/assets/images/tennis-subscription-plans_v2.webp">
            <img decoding="async" src="https://www.stevegtennis.com/assets/images/tennis-subscription-plans_v2.webp" style="max-width: 640px; width:100%;" alt="Subscription Plans">
            </picture>
         </a>
      </p>
      <br/>
      
      <h3>${playerOne} ile ${playerTwo} Karşı karşıya, Önizleme, İstatistikler ve Seçim:</h3>
      <article>
         <h5>Birebir ${leads}.</h5>
         <br/>
         <p>${paraphrasedBlog?.replace(/^"|"$/g, '')}</p>
      </article>
      
      <br/><br/>
      
      <h3>${playerOne} vs ${playerTwo} Tahmini:</h3>
      
      <p>
      ${playerOne}'ın düz setlerde kazanacağına inanıyorum. 
      Stevegtennis.com tahmin algoritması toplamada çok daha iyi bir başarı oranına sahip 
      maçı benden kazananlar!\n
      Bu maç için kimi seçtiğine buradan göz atabilirsiniz: <a href="https://www.stevegtennis.com/head-to-head/men/${player1slug}/${player2slug}/" target="_blank">
      Stevegtennis.com ${playerOne} vs ${playerTwo} tahmini.
      </a> 
      </p>`
      }
   },
   {
      language: "Chinese Mandarin",
      languageCode: "zh",
      category: "ATP / WTA 网球预测",
      categoryId: 9270,
      title: "#eventName 预测： #playerOne vs #playerTwo - #eventDate",
      playerTag: "#playerName 预测",
      eventTag: "#eventName ATP 网球预测",
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
         imgWrapper) {

         return `<div style="padding-bottom: 5px;">
         <h2 style="margin-top: unset;">${eventName}</h2>
         <p>${eventHeading2}</p>
      </div>
      
      <div style="display: flex; flex-direction: row;">
         ${imgWrapper?.join("")}
      </div>
      
      <div style="margin: 15px 0">
         <ul>
            <li>比赛：${playerOne} vs ${playerTwo}</li>
            <li>活动名称：${eventName}</li>
            <li>比赛日期：${eventDate}</li>
            ${eventRound ? `<li>匹配回合：${eventRound}</li>` : ""}
            <li>活动日期：${eventDay}</li>
            <li>活动地址：${eventAddress}</li>
         </ul>
      </div>
      
      ${`<p>
      年 ${eventName} 的 ${eventDay} 日程安排中将继续举办大量有趣的比赛。 
      让我们看一下比赛的所有职业生涯、表现和交锋统计数据，看看 ${playerOne} 或 ${playerTwo} 是否有望获胜。
      </p>`.replace(/\n/g, " ")}
      
      <br/><br/>
      
      <h3>比赛详情：</h3>
      <p>${playerOne} 对阵 ${playerTwo}${eventRound ? " - " + eventRound + " - " : " - "}${eventDate} - ${eventName} - ${eventAddress}</p>
      
      <br/>
      <p>
         <a href="https://www.stevegtennis.com/h2h-predictions/plans-match-winner-pro-monthly/" title="Tennis Premium Subscription" style="text-align: center; display: block;"> <picture>
            <source media="(max-width: 899px)" srcset="https://www.stevegtennis.com/assets/images/tennis-subscription-plans-sm_v2.webp">
            <source media="(min-width: 900px)" srcset="https://www.stevegtennis.com/assets/images/tennis-subscription-plans_v2.webp">
            <img decoding="async" src="https://www.stevegtennis.com/assets/images/tennis-subscription-plans_v2.webp" style="max-width: 640px; width:100%;" alt="Subscription Plans">
            </picture>
         </a>
      </p>
      <br/>
      
      <h3>${playerOne} 与 ${playerTwo} 的对决、预览、统计数据和选择：</h3>
      <article>
         <h5>头对头${leads}。</h5>
         <br/>
         <p>${paraphrasedBlog?.replace(/^"|"$/g, '')}</p>
      </article>
      
      <br/><br/>
      
      <h3>${playerOne} vs ${playerTwo} 预测：</h3>
      
      <p>
      我相信${playerOne}会直落两盘获胜。 
      Stevegtennis.com 的预测算法在挑选方面有更好的成功率 
      比我还赢的比赛！
      因此，请在此处查看本场比赛的选择：<a href="https://www.stevegtennis.com/head-to-head/men/${player1slug}/${player2slug}/" target="_blank">
      Stevegtennis.com ${playerOne} vs ${playerTwo} 预测。
      </a> 
      </p>`
      }
   },
   {
      language: "Arabic",
      languageCode: "ar",
      category: "توقعات اتحاد لاعبي التنس المحترفين للتنس",
      categoryId: 9271,
      title: "`توقعات #eventName: #playerOne vs #playerTwo - #eventDate",
      playerTag: "توقعات  #playerName",
      eventTag: "#eventName توقعات اتحاد لاعبي التنس المحترفين للتنس",
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
         imgWrapper) {

         return `<div style="padding-bottom: 5px;">
         <h2 style="margin-top: unset;">${eventName}</h2>
         <p>${eventHeading2}</p>
      </div>
      
      <div style="display: flex; flex-direction: row;">
         ${imgWrapper?.join("")}
      </div>
      
      <div style="margin: 15px 0">
         <ul>
            <li>المباراة: ${playerOne} ضد ${playerTwo}</li>
            <li>اسم الحدث: ${eventName}</li>
            <li>تاريخ المباراة: ${eventDate}</li>
            ${eventRound ? `<li>جولة المباراة: ${eventRound}</li>` : ""}
            <li>يوم الحدث: ${eventDay}</li>
            <li>عنوان الحدث: ${eventAddress}</li>
         </ul>
      </div>
      
      ${`<p>
      يستمر حدث ${eventName} لعام مع الكثير من المباريات المثيرة للاهتمام وفقًا لجدول ${eventDay}. 
      دعونا نلقي نظرة على جميع الإحصائيات المهنية والأداء والمواجهات المباشرة للمباراة ونكتشف ما إذا كان ${playerOne} أو ${playerTwo} من المتوقع أن يفوز.
      </p>`.replace(/\n/g, " ")}
      
      <br/><br/>
      
      <h3>تفاصيل المباراة:</h3>
      <p>${playerOne} ضد ${playerTwo}${eventRound ? " - " + eventRound + " - " : " - "}${eventDate} - ${eventName} - ${eventAddress}</p>
      
      <br/>
      <p>
         <a href="https://www.stevegtennis.com/h2h-predictions/plans-match-winner-pro-monthly/" title="Tennis Premium Subscription" style="text-align: center; display: block;"> <picture>
            <source media="(max-width: 899px)" srcset="https://www.stevegtennis.com/assets/images/tennis-subscription-plans-sm_v2.webp">
            <source media="(min-width: 900px)" srcset="https://www.stevegtennis.com/assets/images/tennis-subscription-plans_v2.webp">
            <img decoding="async" src="https://www.stevegtennis.com/assets/images/tennis-subscription-plans_v2.webp" style="max-width: 640px; width:100%;" alt="Subscription Plans">
            </picture>
         </a>
      </p>
      <br/>
      
      <h3>${playerOne} vs ${playerTwo} المواجهات المباشرة والمعاينة والإحصائيات والاختيار:</h3>
      <article>
         <h5>وجها لوجه ${leads}.</h5>
         <br/>
         <p>${paraphrasedBlog?.replace(/^"|"$/g, '')}</p>
      </article>
      
      <br/><br/>
      
      <h3>توقع ${playerOne} مقابل ${playerTwo}:</h3>
      
      <p>
      أعتقد أن ${playerOne} سيفوز بمجموعتين متتاليتين. 
      تتمتع خوارزمية التنبؤ Stevegtennis.com بمعدل نجاح أفضل بكثير في اختيار 
      الفائزين بالمباراة أكثر مني!
      لذا تحقق من من يختاره لهذه المباراة هنا: 
      <a href="https://www.stevegtennis.com/head-to-head/men/${player1slug}/${player2slug}/" target="_blank">
      توقع موقع Stevegtennis.com ${playerOne} مقابل ${playerTwo}.
      </a> 
      </p>`
      }
   },
   {
      language: "Japanese",
      languageCode: "ja",
      category: "ATP / WTAテニスの予想",
      categoryId: 9272,
      title: "#eventName の予測: #playerOne 対 #playerTwo - #eventDate",
      playerTag: "#playerName の予測",
      eventTag: "#eventName ATPテニスの予想",
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
         imgWrapper) {

         return `<div style="padding-bottom: 5px;">
         <h2 style="margin-top: unset;">${eventName}</h2>
         <p>${eventHeading2}</p>
      </div>
      
      <div style="display: flex; flex-direction: row;">
         ${imgWrapper?.join("")}
      </div>
      
      <div style="margin: 15px 0">
         <ul>
            <li>対戦: ${playerOne} 対 ${playerTwo}</li>
            <li>イベント名: ${eventName}</li>
            <li>試合日: ${eventDate}</li>
            ${eventRound ? `<li>マッチラウンド: ${eventRound}</li>` : ""}
            <li>イベントの日: ${eventDay}</li>
            <li>イベントアドレス: ${eventAddress}</li>
         </ul>
      </div>
      
      ${`<p>
      年の ${eventName} では、${eventDay} のスケジュールで興味深い試合が数多く行われます。 
      試合のすべてのキャリア、パフォーマンス、対戦成績を見て、${playerOne} と ${playerTwo} のどちらが勝つと予想されるかを調べてみましょう。
      </p>`.replace(/\n/g, " ")}
      
      <br /><br />
      
      <h3>試合の詳細:</h3>
      <p>${playerOne} 対 ${playerTwo}${eventRound ? " - " + eventRound + " - " : " - "}${eventDate} - ${eventName} - ${eventAddress}</p>
      
      <br/>
      <p>
         <a href="https://www.stevegtennis.com/h2h-predictions/plans-match-winner-pro-monthly/" title="Tennis Premium Subscription" style="text-align: center; display: block;"> <picture>
            <source media="(max-width: 899px)" srcset="https://www.stevegtennis.com/assets/images/tennis-subscription-plans-sm_v2.webp">
            <source media="(min-width: 900px)" srcset="https://www.stevegtennis.com/assets/images/tennis-subscription-plans_v2.webp">
            <img decoding="async" src="https://www.stevegtennis.com/assets/images/tennis-subscription-plans_v2.webp" style="max-width: 640px; width:100%;" alt="Subscription Plans">
            </picture>
         </a>
      </p>
      <br/>
      
      <h3>${playerOne} 対 ${playerTwo} の直接対決、プレビュー、統計、選択:</h3>
      <article>
         <h5>直接対決 ${leads}。</h5>
         <br />
         <p>${paraphrasedBlog?.replace(/^"|"$/g, '')}</p>
      </article>
      
      <br /><br />
      
      <h3>${playerOne} 対 ${playerTwo} 予測:</h3>
      
      <p>
         私は ${playerOne} がストレート セットで勝つと信じています。 
         Stevegtennis.com の予測アルゴリズムは、ピッキングの成功率がはるかに優れています。 
         私より勝者と対戦してください!
         この試合に誰が選ばれるかをここでチェックしてください: 
         <a href="https://www.stevegtennis.com/head-to-head/men/${player1slug}/${player2slug}/" target="_blank">
            Stevegtennis.com の ${playerOne} 対 ${playerTwo} の予測。
         </a> 
      </p>`
      }
   },
   {
      language: "Russian",
      languageCode: "ru",
      category: "Прогнозы ATP / WTA на теннис",
      categoryId: 9273,
      title: "Прогнозы на #eventName: #playerOne против #playerTwo - #eventDate",
      playerTag: "Прогнозы #playerName",
      eventTag: "#eventName Прогнозы ATP на теннис",
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
         imgWrapper) {

         return `<div style="padding-bottom: 5px;">
         <h2 style="margin-top: unset;">${eventName}</h2>
         <p>${eventHeading2}</p>
      </div>
      
      <div style="display: flex; flex-direction: row;">
         ${imgWrapper?.join("")}
      </div>
      
      <div style="margin: 15px 0">
         <ul>
            <li>Матч: ${playerOne} против ${playerTwo}</li>
            <li>Название события: ${eventName}</li>
            <li>Дата матча: ${eventDate}</li>
            ${eventRound ? `<li>Раунд матча: ${eventRound}</li>` : ""}
            <li>День мероприятия: ${eventDay}</li>
            <li>Адрес мероприятия: ${eventAddress}</li>
         </ul>
      </div>
      
      ${`<p>
      ${eventName} года продолжается множеством интересных матчей в расписании ${eventDay}. 
      Давайте посмотрим на всю статистику карьеры, выступлений и личных встреч в матче и выясним, кто, как ожидается, выиграет: ${playerOne} или ${playerTwo}.
      </p>`.replace(/\n/g, " ")}
      
      <br/><br/>
      
      <h3>Подробности матча:</h3>
      <p>${playerOne} против ${playerTwo}${eventRound ? " - " + eventRound + " - " : " - "}${eventDate} - ${eventName} - ${eventAddress}</p>
      
      <br/>
      <p>
         <a href="https://www.stevegtennis.com/h2h-predictions/plans-match-winner-pro-monthly/" title="Tennis Premium Subscription" style="text-align: center; display: block;"> <picture>
            <source media="(max-width: 899px)" srcset="https://www.stevegtennis.com/assets/images/tennis-subscription-plans-sm_v2.webp">
            <source media="(min-width: 900px)" srcset="https://www.stevegtennis.com/assets/images/tennis-subscription-plans_v2.webp">
            <img decoding="async" src="https://www.stevegtennis.com/assets/images/tennis-subscription-plans_v2.webp" style="max-width: 640px; width:100%;" alt="Subscription Plans">
            </picture>
         </a>
      </p>
      <br/>
      
      <h3>Личный бой ${playerOne} против ${playerTwo}, обзор, статистика и выбор:</h3>
      <article>
         <h5>Сопоставление ${leads}.</h5>
         <br/>
         <p>${paraphrasedBlog?.replace(/^"|"$/g, '')}</p>
      </article>
      
      <br/><br/>
      
      <h3>Прогноз ${playerOne} против ${playerTwo}:</h3>
      
      <p>
         Я считаю, что ${playerOne} выиграет в двух сетах. 
         Алгоритм прогнозирования Stevegtennis.com имеет гораздо лучший показатель успеха при выборе 
         победителей матча, чем я!
         Так что проверьте, кого он выберет для этого матча здесь: 
         <a href="https://www.stevegtennis.com/head-to-head/men/${player1slug}/${player2slug}/" target="_blank">
         Прогноз Stevegtennis.com: ${playerOne} против ${playerTwo}.
         </a> 
      </p>`
      }
   },
   {
      language: "Hindi",
      languageCode: "hi",
      category: "एटीपी टेनिस भविष्यवाणियाँ",
      categoryId: 9274,
      title: "#eventName पूर्वानुमान: #playerOne बनाम #playerTwo - #eventDate",
      playerTag: "#playerName भविष्यवाणियाँ`",
      eventTag: "#eventName एटीपी टेनिस भविष्यवाणियाँ",
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
         imgWrapper) {

         return `<div style='padding-bottom: 5px;'>
         <h2 style='margin-top: unset;'>${eventName}</h2>
         <p>${eventHeading2}</p>
      </div>
      
      <div style="display: flex; flex-direction: row;">${imgWrapper?.join("")}</div>
      
      <div style="margin: 15px 0">
         <ul>
            <li>मैच जारी: ${playerOne} बनाम ${playerTwo}</li>
            <li>इवेंट का नाम: ${eventName}</li>
            <li>मैच तिथि: ${eventDate}</li>
            ${eventRound ? `<li>मैच राउंड: ${eventRound}</li>` : ""}
            <li>घटना का दिन: ${eventDay}</li>
            <li>इवेंट का पता: ${eventAddress}</li>
         </ul>
      </div>
      
      ${`<p>
         ${eventName} ${eventDay} शेड्यूल पर बहुत सारे दिलचस्प मैचों के साथ जारी है। 
         आइए मैच के सभी करियर, प्रदर्शन और आमने-सामने के आँकड़ों पर एक नज़र डालें और पता करें कि क्या ${playerOne} या ${playerTwo} के जीतने की उम्मीद है।
      </p>`.replace(/\n/g, " ")}
      
      <br/> <br/>
      
      <h3>मैच विवरण:</h3>
      <p>${playerOne} बनाम ${playerTwo}${eventRound ? " - " + eventRound + " - " : " - "}${eventDate} - ${eventName} - ${eventAddress}</p>
      
      <br/>
         <p>
            <a href="https://www.stevegtennis.com/h2h-predictions/plans-match-winner-pro-monthly/" title="Tennis Premium Subscription" style="text-align: center; display: block;"> <picture>
               <source media="(max-width: 899px)" srcset="https://www.stevegtennis.com/assets/images/tennis-subscription-plans-sm_v2.webp">
               <source media="(min-width: 900px)" srcset="https://www.stevegtennis.com/assets/images/tennis-subscription-plans_v2.webp">
               <img decoding="async" src="https://www.stevegtennis.com/assets/images/tennis-subscription-plans_v2.webp" style="max-width: 640px; width:100%;" alt="Subscription Plans">
               </picture>
            </a>
         </p>
      <br/>
      
      <h3>${playerOne} बनाम ${playerTwo} आमने-सामने, पूर्वावलोकन, आँकड़े और चयन:</h3>
      <article>
         <h5>हेड टू हेड ${leads}.</h5>
         <br/>
         <p>${paraphrasedBlog && paraphrasedBlog?.replace(/^"|"$/g, '')}</p>
      </article>
      
      <br/> <br/>
      
      <h3>${playerOne} बनाम ${playerTwo} भविष्यवाणी:</h3>
      
      <p>
         मेरा मानना ​​है कि ${playerOne} सीधे सेटों में जीतेगा। 
         स्टीवगटेनिस.कॉम भविष्यवाणी एल्गोरिदम की चयन में सफलता दर काफी बेहतर है 
         मुझसे ज़्यादा मैच विजेता!\n
         तो यहां देखें कि वह इस मैच के लिए किसे चुनता है: <a href='https://www.stevegtennis.com/head-to-head/men/${player1slug}/${player2slug}/' target='_blank' >
         स्टीवगटेनिस.कॉम ${playerOne} बनाम ${playerOne} भविष्यवाणी।
         </a> 
      </p>`
      }
   }
]


const postTemplateMs = [
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
         <div style="display: flex; flex-direction: row;">${imgWrapper?.join("")}</div>
         <br/>
         <h3">What Time Will ${playerOne} Play Against ${playerTwo}?</h3>
         ${`<p>
         ${playerOneSurname} and ${playerTwoSurname} are on the ${eventDay} Schedule at ${plainEventName} ${eventYear} on ${eventDate}. Lets breakdown the career, past stats and recent form of these players and predict who will get the victory.
         </p>`.replace(/\n/g, " ")}
         <br/> <br/>
         <h3>Who Will Win In This Head-To-Head?</h3>
         <p>${paraphrasedBlog && paraphrasedBlog?.replace(/^"|"$/g, '')}</p>
         <br/> <br/>
         <h3>My Conclusion:</h3>
         <p>
            My pick is that ${playerOneSurname} will win. Matchstat.com has an Artificial Intelligence (Ai) prediction model that is trained on all professional ATP and WTA past matches. 
            To find out who our model thinks will win for ${playerOne} vs ${playerTwo}, have a look at the prediction here:
            <br/>
            <a href="https://matchstat.com/tennis/h2h-odds-bets/${player1slug}/${player2slug}/" target="_blank">
               Matchstat.com ${playerOne} vs ${playerTwo} prediction.
            </a> 
         </p>
         </div>`
      }
   },
   {
      language: "Spanish",
      languageCode: "es",
      category: "Predicciones De Tenis WTA / ATP",
      categoryId: 1111,
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
            <div style="display: flex; flex-direction: row;">${imgWrapper?.join("")}</div>
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
               Mi elección es que ganará ${playerOneSurname}. Matchstat.com tiene un modelo de Pronósticos de Inteligencia Artificial (IA) que se entrena en todos los partidos profesionales anteriores de la ATP y la WTA. 
               Para saber quién cree nuestro modelo que ganará en ${playerOne} frente a ${playerTwo}, echa un vistazo aquí:
               <br/>
               <a href="https://matchstat.com/tennis/h2h-odds-bets/${player1slug}/${player2slug}/" target="_blank">
                  Pronóstico de Matchstat.com ${playerOne} vs ${playerTwo}.
               </a> 
            </p>
            </div>`
      }
   },
   {
      language: "Portugease",
      languageCode: "pt",
      category: "Previsões De Tênis WTA / ATP",
      categoryId: 1111,
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
            <div style="display: flex; flex-direction: row;">${imgWrapper?.join("")}</div>
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
               Minha escolha é que ${playerOneSurname} vencerá. Matchstat.com possui um modelo de Palpites de Inteligência Artificial (IA) que é treinado em todas as partidas profissionais anteriores da ATP e WTA. 
               Para descobrir quem nosso modelo acha que ganhará ${playerOne} vs ${playerTwo}, dê uma olhada aqui:
               <br/>
               <a href="https://matchstat.com/tennis/h2h-odds-bets/${player1slug}/${player2slug}/" target="_blank">
                  Palpites de ${playerOne} vs ${playerTwo} do Matchstat.com.
               </a> 
            </p>
            </div>`
      }
   },
   {
      language: "French",
      languageCode: "fr",
      category: "Prédictions De Tennis WTA / ATP",
      categoryId: 1111,
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
            <div style="display: flex; flex-direction: row;">${imgWrapper?.join("")}</div>
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
               Mon choix est que ${playerOneSurname} gagnera. Matchstat.com dispose d'un modèle de pronostics d'intelligence artificielle (IA) qui est formé sur tous les matchs professionnels passés de l'ATP et de la WTA. 
               Pour savoir qui, selon notre modèle, gagnera pour ${playerOne} contre ${playerTwo}, jetez un œil ici :
               <br/>
               <a href="https://matchstat.com/tennis/h2h-odds-bets/${player1slug}/${player2slug}/" target="_blank">
                  Pronostics Matchstat.com ${playerOne} contre ${playerTwo}.
               </a> 
            </p>
            </div>`
      }
   },
   {
      language: "German",
      languageCode: "de",
      category: "Tennis Tipps & Prognosen WTA / ATP ",
      categoryId: 1111,
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
            <div style="display: flex; flex-direction: row;">${imgWrapper?.join("")}</div>
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
               Mein Tipp ist, dass ${playerOneSurname} gewinnt. Matchstat.com verfügt über ein Vorhersagemodell mit künstlicher Intelligenz (KI), das auf allen vergangenen professionellen ATP- und WTA-Spielen trainiert wird. 
               Um herauszufinden, wer laut unserem Modell für ${playerOne} vs. ${playerTwo} gewinnen wird, schauen Sie hier:
               <br/>
               <a href="https://matchstat.com/tennis/h2h-odds-bets/${player1slug}/${player2slug}/" target="_blank">
                  Matchstat.com ${playerOne} vs ${playerTwo} Wett-Tipps & Prognosen.
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
            <div style="display: flex; flex-direction: row;">${imgWrapper?.join("")}</div>
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
               La mia scelta è che ${playerOneSurname} vincerà. Matchstat.com dispone di un modello di previsione dell'intelligenza artificiale (Ai) addestrato su tutte le partite passate dell'ATP e WTA professionistiche. 
               Per scoprire chi secondo il nostro modello vincerà ${playerOne} contro ${playerTwo}, dai un'occhiata qui:
               <br/>
               <a href="https://matchstat.com/tennis/h2h-odds-bets/${player1slug}/${player2slug}/" target="_blank">
                  Pronostico di Matchstat.com ${playerOne} vs ${playerTwo}.
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
          <div style="display: flex; flex-direction: row;">${imgWrapper?.join("")}</div>
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
             Mój typ jest taki, że wygra ${playerOneSurname}. Matchstat.com posiada model przewidywania sztucznej inteligencji (Ai), który jest trenowany na wszystkich przeszłych profesjonalnych meczach ATP i WTA. 
             Aby dowiedzieć się, kto według naszego modelu wygra walkę ${playerOne} vs ${playerTwo}, spójrz tutaj:
             <br/>
             <a href="https://matchstat.com/tennis/h2h-odds-bets/${player1slug}/${player2slug}/" target="_blank">
                Prognozy Matchstat.com ${playerOne} vs ${playerTwo}.
             </a> 
          </p>
          </div>`
      }
   },
   {
      language: "Dutch",
      languageCode: "nl",
      category: "WTA / ATP-tennisvoorspellingen",
      categoryId: 1111,
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
         <div style="display: flex; flex-direction: row;">${imgWrapper?.join("")}</div>
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
            Mijn keuze is dat ${playerOneSurname} zal winnen. Matchstat.com heeft een voorspellingsmodel voor kunstmatige intelligentie (Ai) dat is getraind op alle professionele ATP- en WTA-wedstrijden uit het verleden. 
            Om erachter te komen wie volgens ons model zal winnen voor ${playerOne} versus ${playerTwo}, kijk hier:
            <br/>
            <a href="https://matchstat.com/tennis/h2h-odds-bets/${player1slug}/${player2slug}/" target="_blank">
               Matchstat.com ${playerOne} versus ${playerTwo} Wedtips.
            </a> 
         </p>
         </div>`
      }
   },
   {
      language: "Turkish",
      languageCode: "tr",
      category: "WTA / ATP Tenis Tahminleri",
      categoryId: 1111,
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
         <div style="display: flex; flex-direction: row;">${imgWrapper?.join("")}</div>
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
            Benim tahminim ${playerOneSurname}'ın kazanacağı yönünde. Matchstat.com, tüm profesyonel ATP ve WTA geçmiş maçları üzerine eğitilmiş bir Yapay Zeka (Ai) tahmin modeline sahiptir. 
            Modelimizin ${playerOne} karşısında ${playerTwo} karşısında kimin kazanacağını düşündüğünü öğrenmek için buraya bir göz atın:
            <br/>
            <a href="https://matchstat.com/tennis/h2h-odds-bets/${player1slug}/${player2slug}/" target="_blank">
               Matchstat.com ${playerOne} - ${playerTwo} tahmini.
            </a> 
         </p>
         </div>`
      }
   },
   {
      language: "Chinese Mandarin",
      languageCode: "zh",
      category: "WTA / ATP 网球预测",
      categoryId: 1111,
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
         <div style="display: flex; flex-direction: row;">${imgWrapper?.join("")}</div>
         <br/>
         <h3>${playerOne} 何时对阵 ${playerTwo}？</h3>
         ${`<p>
         ${playerOneSurname} 和 ${playerTwoSurname} 的 ${eventDay} 日程表将于 ${eventDate} ${plainEventName} ${eventYear} 进行。让我们分析一下这些球员的职业生涯、过去的统计数据和最近的表现，并预测谁将获得胜利。
         </p>`.replace(/\n/g, " ")}
         <br/> <br/>
         <h3>谁会在这场正面交锋中获胜？</h3>
         <p>${paraphrasedBlog && paraphrasedBlog?.replace(/^"|"$/g, '')}</p>
         <br/> <br/>
         <h3>我的结论：</h3>
         <p>
            我的选择是 ${playerOneSurname} 将获胜。 Matchstat.com 拥有一个人工智能 (Ai) 预测模型，该模型经过所有职业 ATP 和 WTA 过去比赛的训练。 
            要了解我们的模型认为谁会赢得 ${playerOne} 与 ${playerTwo} 的比赛，请查看此处：
            <br/>
            <a href="https://matchstat.com/tennis/h2h-odds-bets/${player1slug}/${player2slug}/" target="_blank">
               Matchstat.com ${playerOne} vs ${playerTwo} 预测。
            </a> 
         </p>
         </div>`
      }
   },
   {
      language: "Arabic",
      languageCode: "ar",
      category: "توقعات اتحاد لاعبي التنس المحترفين للتنس",
      categoryId: 1111,
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
         <div style="display: flex; flex-direction: Row;">${imgWrapper?.join("")}</div>
         <br/>
         <h3>في أي وقت سيلعب ${playerOne} ضد ${playerTwo}؟</h3>
         ${`<p>
         ${playerOneSurname} و${playerTwoSurname} موجودان في جدول ${eventDay} في ${plainEventName} ${eventYear} في ${eventDate}. دعونا نفصل المهنة والإحصائيات السابقة والشكل الأخير لهؤلاء اللاعبين ونتوقع من سيحقق النصر.
         </p>`.replace(/\n/g, " ")}
         <br/> <br/>
         <h3>من سيفوز في هذه المواجهة المباشرة؟</h3>
         <p>${paraphrasedBlog && paraphrasedBlog?.replace(/^"|"$/g, '')}</p>
         <br/> <br/>
         <h3>استنتاجي:</h3>
         <p>
            خياري هو أن ${playerOneSurname} هو الذي سيفوز. يحتوي موقع Matchstat.com على نموذج للتنبؤ بالذكاء الاصطناعي (Ai) يتم تدريبه على جميع مباريات ATP وWTA الاحترافية السابقة. 
            لمعرفة من يعتقد نموذجنا أنه سيفوز في ${playerOne} مقابل ${playerTwo}، ألقِ نظرة هنا:
            <br/>
            <a href="https://matchstat.com/tennis/h2h-odds-bets/${player1slug}/${player2slug}/" target="_blank">
               توقع Matchstat.com ${playerOne} مقابل ${playerTwo}.
            </a> 
         </p>
         </div>`
      }
   },
   {
      language: "Japanese",
      languageCode: "ja",
      category: "WTA / ATPテニスの予想",
      categoryId: 1111,
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
         <div style="display: flex; flex-direction: row;">${imgWrapper?.join("")}</div>
         <br/>
         <h3>${playerOne} は ${playerTwo} と何時に対戦しますか?</h3>
         ${`<p>
         ${playerOneSurname} と ${playerTwoSurname} は、${eventDate} の ${plainEventName} ${eventYear} の ${eventDay} スケジュールに参加しています。これらの選手のキャリア、過去の統計、最近の調子を分析し、誰が勝利を得るのかを予想してみましょう。
         </p>`.replace(/\n/g, " ")}
         <br/> <br/>
         <h3>この直接対決で勝つのは誰ですか?</h3>
         <p>${paraphrasedBlog && paraphrasedBlog?.replace(/^"|"$/g, '')}</p>
         <br/> <br/>
         <h3>私の結論:</h3>
         <p>
            私の選択は、${playerOneSurname} が勝つということです。 Matchstat.com には、ATP と WTA の過去のすべてのプロの試合でトレーニングされた人工知能 (Ai) 予測モデルがあります。 
            私たちのモデルが ${playerOne} と ${playerTwo} でどちらが勝つと考えているかを確認するには、ここをご覧ください。
            <br/>
            <a href="https://matchstat.com/tennis/h2h-odds-bets/${player1slug}/${player2slug}/" target="_blank">
               Matchstat.com ${playerOne} 対 ${playerTwo} の予測。
            </a> 
         </p>
         </div>`
      }
   },
   {
      language: "Russian",
      languageCode: "ru",
      category: "Прогнозы WTA / ATP на теннис",
      categoryId: 1111,
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
         <div style="display: flex; flex-direction: row;">${imgWrapper?.join("")}</div>
         <br/>
         <h3>В какое время ${playerOne} сыграет против ${playerTwo}?</h3>
         ${`<p>
         ${playerOneSurname} и ${playerTwoSurname} включены в расписание ${eventDay} в ${plainEventName} ${eventYear} ${eventDate}. Давайте разберем карьеру, прошлую статистику и недавнюю форму этих игроков и предскажем, кто одержит победу.
         </p>`.replace(/\n/g, " ")}
         <br/> <br/>
         <h3>Кто победит в этом противостоянии?</h3>
         <p>${paraphrasedBlog && paraphrasedBlog?.replace(/^"|"$/g, '')}</p>
         <br/> <br/>
         <h3>Мой вывод:</h3>
         <p>
            Я считаю, что победит ${playerOneSurname}. Matchstat.com имеет модель прогнозирования на основе искусственного интеллекта (Ai), которая обучена на всех прошлых матчах профессиональных турниров ATP и WTA. 
            Чтобы узнать, кто, по мнению нашей модели, победит в матче ${playerOne} против ${playerTwo}, посмотрите здесь:
            <br/>
            <a href="https://matchstat.com/tennis/h2h-odds-bets/${player1slug}/${player2slug}/" target="_blank">
               Прогноз Matchstat.com: ${playerOne} против ${playerTwo}.
            </a> 
         </p>
         </div>`
      }
   },
   {
      language: "Hindi",
      languageCode: "hi",
      category: "एटीपी टेनिस भविष्यवाणियाँ",
      categoryId: 1111,
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
         <div style='display: flex; flex-direction: row;'>${imgWrapper?.join('')}</div>
         <br/>
         <h3>${playerOne} किस समय ${playerTwo} के विरुद्ध खेलेगा?</h3>
         ${`<p>
         ${playerOneSurname} और ${playerTwoSurname} ${eventDate} को ${plainEventName} ${eventYear} पर ${eventDay} शेड्यूल पर हैं। आइए इन खिलाड़ियों के करियर, पिछले आंकड़ों और हालिया फॉर्म का विश्लेषण करें और भविष्यवाणी करें कि जीत किसे मिलेगी।
         </p>`.replace(/\n/g, " ")}
         <br/> <br/>
         <h3>इस आमने-सामने की लड़ाई में कौन जीतेगा?</h3>
         <p>${paraphrasedBlog && paraphrasedBlog?.replace(/^"|"$/g, '')}</p>
         <br/> <br/>
         <h3>मेरा निष्कर्ष:</h3>
         <p>
            मेरी पसंद यह है कि ${playerOneSurname} जीतेगा। मैचस्टैट.कॉम के पास एक आर्टिफिशियल इंटेलिजेंस (एआई) भविष्यवाणी मॉडल है जो सभी पेशेवर एटीपी और डब्ल्यूटीए पिछले मैचों पर प्रशिक्षित है। 
            यह जानने के लिए कि हमारा मॉडल ${playerOne} बनाम ${playerTwo} के लिए कौन जीतेगा, यहां देखें:
            <br/>
            <a href='https://matchstat.com/tennis/h2h-odds-bets/${player1slug}/${player2slug}/' target='_blank'>
               Matchstat.com ${playerOne} बनाम ${playerTwo} भविष्यवाणी।
            </a> 
         </p>
         </div>`
      }
   }
];

module.exports = { postTemplateSg, postTemplateMs };