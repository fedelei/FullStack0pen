const Notification = ({ confirm, error }) => {
    if (!confirm && !error) {
    return null;
  }

  return (
    <>
    <div className={confirm ? "confirm" : "error"}>
      {confirm && <div>{confirm}</div>}
      {error && <div>{error}</div>}
    </div>
    </>
  );
};

export default Notification;
