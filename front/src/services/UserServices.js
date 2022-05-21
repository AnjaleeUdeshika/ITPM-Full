import axios from "axios";

const HOST = "http://localhost:4500";

//for add a NutritionSchedule
export const createAcoountService = async (payload) => {
  try {
    await axios.post(`${HOST}/api/user`, payload);
    return {
      ok: true,
    };
  } catch (error) {
    return {
      ok: false,
      err: error.response.data.status,
    };
  }
};

export const loginService = async (payload) => {
  try {
    var res = await axios.post(`${HOST}/api/user/login`, payload);
    if (res.data.code == 401) {
      return {
        ok: true,
        code: res.data.code,
        response: res.data.status,
      };
    } else {
      sessionStorage.setItem("token", res.data.token);
      sessionStorage.setItem("user_id", res.data.id);
      sessionStorage.setItem("name", res.data.name);
      return {
        ok: true,
      };
    }
  } catch (error) {
    return {
      ok: false,
      err: error.response.data.status,
    };
  }
};

export const getUserData = async () => {
  let user_id = sessionStorage.getItem("user_id");
  try {
    let res = await axios.get(`${HOST}/api/user/${user_id}`);
    console.log("RES", res);
    return {
      ok: true,
      response: res.data,
    };
  } catch (error) {
    return {
      ok: false,
      err: error.response.data.status,
    };
  }
};

export const updateUserProfileService = async (payload) => {
  let user_id = sessionStorage.getItem("user_id");
  try {
    await axios.put(`${HOST}/api/user/update/${user_id}`,payload);
    return {
      ok: true,
    };
  } catch (error) {
    return {
      ok: false,
      err: error.response.data.status,
    };
  }
};


export const deleteUserService = async (Id) => {
    let user_id = sessionStorage.getItem("user_id");
    try {
        await axios.delete(`${HOST}/api/user/${user_id}`);
        return {
            ok: true,
        };
    } catch (error) {
        return {
            ok: false, err: error.response.data.status
        };
    }
};

export const logoutUser = () => {
    sessionStorage.clear()
}
// //for retrieve all the NutritionSchedule records
// export const getAllNutritionScheduleRecodsService = async () => {
//     try {
//         const response = await axios.get(`${HOST}/api/nutritionSchedule`);
//         return {
//             ok: true, data: response.data.data
//         };
//     } catch (error) {
//         return {
//             ok: false, err: error.response.data.status
//         };
//     }
// };
