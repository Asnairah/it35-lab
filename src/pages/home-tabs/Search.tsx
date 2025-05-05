import { 
    IonButtons,
    IonContent, 
    IonHeader, 
    IonMenuButton, 
    IonPage, 
    IonTitle, 
    IonToolbar, 
    IonSearchbar, 
    IonList, 
    IonItem 
  } from '@ionic/react';
  
  const Search: React.FC = () => {
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonMenuButton />
            </IonButtons>
            <IonTitle>Search</IonTitle>
          </IonToolbar>
        </IonHeader>
        
        <IonContent fullscreen>
          {/* Search Bar */}
          <IonSearchbar placeholder="Search for a sport..." />
  
          {/* Recent Sports Searches (Static List) */}
          <h3 style={{ padding: '10px', margin: 0 }}>Recent Searches</h3>
          <IonList>
            <IonItem button>Basketball</IonItem>
            <IonItem button>Football</IonItem>
            <IonItem button>Tennis</IonItem>
            <IonItem button>Swimming</IonItem>
            <IonItem button>Boxing</IonItem>
            <IonItem button>Badminton</IonItem>
            <IonItem button>Golf</IonItem>
            <IonItem button>Volleyball</IonItem>
            <IonItem button>Table Tennis</IonItem>
            <IonItem button>Baseball</IonItem>
          </IonList>
        </IonContent>
      </IonPage>
    );
  };
  
  export default Search;
  