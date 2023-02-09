import MailForm from "./components/mail-form/MailForm";
import Title from "./components/title/Title";

function App() {
	return (
		<div className="wrapper">
			<div className="content">
				<Title>Отправить email</Title>
				<MailForm />
			</div>
		</div>
	);
}

export default App;
