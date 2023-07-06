let es = new EventSource("/_frsh/alive");
window.addEventListener("beforeunload", (event) => {
  es.close();
});
es.addEventListener("message", function listener(e) {
  if (e.data !== "e1fdb72f916980d940570611804f6f6b8b1fec23") {
    this.removeEventListener("message", listener);
    location.reload();
  }
});