export function ErrorMessage({ message }: { message?: string }) {
	return (
		<div data-testid="message-container">
			<p>{message ?? "Something went wrong"}</p>
		</div>
	)
}
