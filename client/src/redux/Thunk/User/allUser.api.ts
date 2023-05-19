export const fetchGetAllUsersFromBack = async () => {
    try {
      const response = await fetch('/user', {
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
      });
  
      if (response.ok) {
        const data = await response.json();
        return data;
      }
    } catch (error) {
      console.error(error);
      return Promise.reject(new Error('400'));
    }
  };