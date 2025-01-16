function handleButtonClick() {
  window.location.href =
    "https://aspen.eccouncil.org/CompetitionBadge/VerifyCBadge?type=competition&a=4YkDUBNRAkWIjjKuJx7bxw=="; // Navigate to the URL
}

function LinkFunc() {
  return (
    <button type="button" className="btn btn-dark" onClick={handleButtonClick}>
      View Badge
    </button>
  );
}

export default LinkFunc;
