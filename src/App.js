import 'bulma/css/bulma.css'
import ProfileCard from "./ProfileCard";
import AlexaImage from './images/alexa.png';
import CortanaImage from './images/cortana.png';
import SiriImage from './images/siri.png';

function App(){
  return (
    <div>
        <section class="hero is-primary">
  <div class="hero-body">
    <p class="title">
      Personal Digital Assistants
    </p>
  </div>
</section>

        <div className='container'>
          <section className='section'>
            <div className='columns'>
              <div className='column is-4'>
                <ProfileCard 
                title="Alexa" 
                handle="@alexa99" 
                image={AlexaImage}
                description="Alexa was created by Amazon and helps you buy things"
                 />
              </div>
              <div className='column is-4'>
                <ProfileCard 
                title="Contana" 
                handle="@cortana88" 
                image={CortanaImage}
                description="Contana was created by MS and helps you buy things"
                
                />
              </div>
              <div className='column is-4'>
                <ProfileCard 
                title="Siri" 
                handle="@siri55" 
                image={SiriImage}
                description="Siri was created by MS and helps you buy things"
          
                />
              </div>
            </div>
          </section>
        </div>
    </div>
  );
}

export default App;