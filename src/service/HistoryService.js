class HistoryService {
  getCardHistory() {
    let history = localStorage.getItem("history");
    return JSON.parse(history);
  }
}

export default new HistoryService();
