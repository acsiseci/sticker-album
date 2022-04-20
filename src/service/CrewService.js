import data from "../data.json";

class CrewService {
  getCrew() {
    return getAllData();
  }

  getTeam(index) {
    let data = getAllData();
    return data.teams[index];
  }

  setOpenCard(data) {
    localStorage.setItem("data", JSON.stringify(data));
  }
}

const getAllData = () => {
  let data = localStorage.getItem("data");
  return JSON.parse(data);
};

export default new CrewService();
