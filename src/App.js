import ProfileCard from "./ProfileCard";

function App() {
  return (
    <div>
        <div>Personal Digital Assistant</div>
        <ProfileCard title="Alexa" handle="@alexa99" />
        <ProfileCard title="Contana" handle="@cortana88" />
        <ProfileCard title="Siri" handle="@siri55" />
    </div>
  )
}

export default App;