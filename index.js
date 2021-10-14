const Button = (props) => {
  //  Write your code here.
  const { buttonContent, className } = props;
  return <button className={`button ${className}`}>{buttonContent}</button>;
};

const element = (
  //  Write your code here.
  <div className="bg-container">
    <div className="items-container">
      <h1 className="heading">Social Buttons</h1>
      <div className="buttons-container">
        <Button buttonContent="Like" className="like-button" />
        <Button buttonContent="Comment" className="comment-button" />
        <Button buttonContent="Share" className="share-button" />
      </div>
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
