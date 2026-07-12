const WelcomeMsg = ({ onGetPostsClick }) => {
  return (
    <center className="welcome-msg">
      <div class="px-4 py-5 my-5 text-center">
        <h1 class="display-5 fw-bold text-body-emphasis">
          There are no posts
        </h1>{" "}
      </div>
      <button type="button" class="btn btn-primary" onClick={onGetPostsClick}>
        Get Posts from server
      </button>
    </center>
  );
};

export default WelcomeMsg;
