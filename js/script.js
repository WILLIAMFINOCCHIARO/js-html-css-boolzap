// Boolzapp - a (not very) innovative messaging 
// platform 
// Milestone 1 
// ●   Replica della grafica  con la possibilità di avere  messaggi scritti dall’utente (verdi) e 
// dall’interlocutore (bianco) assegnando due classi CSS diverse 
// ●   Visualizzazione dinamica della lista contatti:  tramite  la direttiva v-for, visualizzare 
// nome e immagine di ogni contatto 
// Milestone 2 
// ●   Visualizzazione dinamica dei messaggi:  tramite la  direttiva v-for, visualizzare tutti i 
// messaggi relativi al contatto attivo all’interno del pannello della conversazione 
// ●   Click sul contatto  mostra la conversazione del contatto  cliccato 
// Milestone 3 
// ●   Aggiunta di un messaggio  : l’utente scrive un testo  nella parte bassa e digitando 
// “enter” il testo viene aggiunto al thread sopra, come messaggio verde 
// ●   Risposta dall’interlocutore:  ad ogni inserimento di  un messaggio, l’utente riceverà 
// un “ok” come risposta, che apparirà dopo 1 secondo. 
// Milestone 4 
// ●   Ricerca utenti:  scrivendo qualcosa nell’input a sinistra, vengono visualizzati solo i 
// contatti il cui nome contiene le lettere inserite (es, Marco, Matteo Martina -> Scrivo 
// “mar” rimangono solo Marco e Martina) 
// Consigli utili: 
// ●   Si possono trascurare le scrollbar verticali, sia nel pannello dei messaggi, che nella 
// lista dei contatti 
// ●   I pulsanti e le icone possono non funzionare (a parte l’invio del messaggio) 
// ●   Per gestire le date, può essere utile la libreria  day.js 
// ●   La struttura dell’array dei contatti potrebbe avere questa forma


const root = new Vue ({
  el:"#root",
    data : {
        contatti: [
            // Michele
            {   
                activeInfo : false,
                nome:"Michele",
                immagine: "img/avatar_1.jpg",
                visibile: true,
                messages : [
                    {
                        data : "15/11/2021  14:59:34",
                        text : "Hai portato a spasso il cane?",
                        status: "sent",
                    },
                    {
                        data : "15/11/2021  15:12:39",
                        text : "Ricordati di dargli da mangiare",
                        status: "sent",
                    },
                    {
                        data : "15/11/2021  16:02:34",
                        text : "Tutto fatto!",
                        status: "received",
                        posizione :"last",
                    }
                ]
            },

            // Fabio 
            {
                activeInfo : false,
                nome:"Fabio",
                immagine: "img/avatar_2.jpg",
                visibile: false,
                messages : [
                    {
                        data : "14/11/2021  18:02:14",
                        text : "Ciao, come stai ?",
                        status: "sent",
                    },
                    {
                        data : "14/11/2021  20:12:39",
                        text : "Bene grazie ! Stasera ci vediamo?",
                        status: "received",
                        posizione :"last",


                    },
                    {
                        data : "14/11/2021  20:22:56",
                        text : "Mi piacerebbe, ma devo andare a fare la spesa.",
                        status: "sent",

                    }
                ]
            },

            // Samuele 
            {
                activeInfo : false,
                nome:"Samuele",
                immagine: "img/avatar_3.jpg",
                visibile: false,
                messages : [
                    {
                        data : "13/11/2021  09:02:14",
                        text : "La Marianna va in campagna",
                        status: "received",
                        posizione :"",


                    },
                    {
                        data : "13/11/2021  11:15:39",
                        text : "Sicuro di non aver sbagliato chat?",
                        status: "sent",

                    },
                    {
                        data : "13/11/2021  13:27:56",
                        text : "Ah scusa!",
                        status: "received",
                        posizione :"last",
                    }
                ]
            },

            // Luisa
            {
                activeInfo : false,
                nome:"Luisa",
                immagine: "img/avatar_io.jpg",
                visibile: false,
                messages : [
                    {
                        data : "13/11/2021  10:12:14",
                        text : "Lo sai che ha aperto una nuova pizzeria?",
                        status: "sent",
                    },
                    {
                        data : "13/11/2021  13:13:36",
                        text : "Si, ma preferirei andare al cinema",
                        status: "received",
                        posizione :"last",
                        
                    }
                ]
            }
        ]
    },


  methods:{





  }



});