
type Props = {
  message: string  
}
export const Loading = ({ message }: Props) => (
  <div style={{ color: 'green' }}>
    <h1>Loading CX...</h1>
    <p>{message}</p>
  </div>
)
