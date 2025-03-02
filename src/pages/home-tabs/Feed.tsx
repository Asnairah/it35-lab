import {
    IonButtons,
    IonContent,
    IonHeader,
    IonMenuButton,
    IonPage,
    IonTitle,
    IonToolbar,
    IonAccordion,
    IonAccordionGroup,
    IonItem,
    IonLabel,
    IonIcon,
    IonImg
  } from '@ionic/react';
  import { chevronDown, star } from 'ionicons/icons';
  
  const sportsData = [
    {
      name: 'Basketball',
      details: 'A team sport where players score by shooting a ball into a hoop.',
      equipment: ['Basketball', 'Hoop', 'Jersey', 'Sneakers'],
      image: 'https://upload.wikimedia.org/wikipedia/commons/7/7a/Basketball.png'
    },
    {
      name: 'Football',
      details: 'A team sport played with a round ball that is kicked into goals.',
      equipment: ['Football', 'Goalposts', 'Shin Guards', 'Jersey'],
      image: 'https://www.nbc.com/sites/nbcblog/files/styles/scale_862/public/2024/07/paris-2024-olympics-soccer.jpg'
    },
    {
      name: 'Tennis',
      details: 'A racket sport that can be played individually against a single opponent.',
      equipment: ['Tennis Racket', 'Tennis Ball', 'Net', 'Court Shoes'],
      image: 'https://upload.wikimedia.org/wikipedia/commons/3/3e/Tennis_Racket_and_Balls.jpg'
    },
    {
      name: 'Swimming',
      details: 'An individual or team racing sport that requires the use of one’s entire body.',
      equipment: ['Swimsuit', 'Goggles', 'Swim Cap', 'Kickboard'],
      image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh8ZZTToPkrG0BrAtoeWQw0jZEWE0btuXJKOJ1YqkTq820NgwAhiwXjXFE5TcmYh-wVcmMXf1wA-54RMFpI9W8vgUQDhyphenhyphenY-fpucrtFCPmmE7-81qeY_k9f9gE12PiEXbB1sRC6JnUxYrXRi/s1600/Edit_Champs_Swim_Meet_2015_0162.JPG'
    },
    {
      name: 'Boxing',
      details: 'A combat sport where two opponents throw punches at each other.',
      equipment: ['Boxing Gloves', 'Mouthguard', 'Punching Bag', 'Hand Wraps'],
      image: 'https://media.rnztools.nz/rnz/image/upload/s--KVj64jIg--/ar_16:10,c_fill,f_auto,g_auto,q_auto,w_1050/v1643553489/4OPLSGS_copyright_image_83144?_a=BACCd2AD'
    },
  ];
  
  const Feed: React.FC = () => {
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonMenuButton />
            </IonButtons>
            <IonTitle>Feed</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>
          <IonAccordionGroup>
            {sportsData.map((sport) => (
              <IonAccordion value={sport.name} key={sport.name}>
                <IonItem slot="header">
                  <IonLabel>
                    {sport.name}
                  </IonLabel>
                  <IonIcon icon={star} style={{ color: 'gold', marginLeft: '8px' }} />
                  <IonIcon slot="end" icon={chevronDown} />
                </IonItem>
                <div slot="content" style={{ padding: '10px', textAlign: 'center' }}>
                  <IonImg src={sport.image} alt={sport.name} style={{ maxWidth: '100%', height: '150px', objectFit: 'cover', borderRadius: '10px' }} />
                  <p><strong>Details:</strong> {sport.details}</p>
                  <p><strong>Equipment:</strong></p>
                  <ul>
                    {sport.equipment.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </IonAccordion>
            ))}
          </IonAccordionGroup>
        </IonContent>
      </IonPage>
    );
  };
  
  export default Feed;
  