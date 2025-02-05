import { apiURL as server } from '@/config/api';
const apiURL = server();
export function getUsers() {
  return fetch(`${apiURL}/profiles`, {
    method: "GET",
    next: { tags: ["all-posts"] },
  });
}

export function getUserByEmail(email : string) {
  return fetch(`${apiURL}/profiles/email/${email}`, {
    method: "GET",
    next: { tags: [`user-${email}`] },
  });
}
