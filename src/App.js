import MailForm from "./components/mail-form/MailForm";
import Title from "./components/title/Title";

function App() {
	return (
		<div className="wrapper">
			<div className="content">
				<Title>Mailgun App</Title>
				<MailForm />
			</div>
		</div>
	);
}

export default App;
