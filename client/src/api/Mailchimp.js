/**
 * Sends request to backend api which posts to mailchimp
 * @param { email: "", name: ""} formData 
 * @param {*} success 
 * @param {*} fail 
 */

const AddToEmailList = (formData, success, fail) => {
  fetch('/api/email', {
      method: 'post',
      body: JSON.stringify(formData),
      headers:{
          'Content-Type': 'application/json'
      }

  })
  .then(res => res.json())
  .then(response => {
      success(response);
  });
}

export { AddToEmailList };