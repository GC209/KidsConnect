/*A button event that updates the presence status according to the following rules. Make sure the button shows a useful label.
  - If the presence status is ‘unknown’ it becomes ‘present’.
  - If the presence status is ‘present’ it becomes ‘picked up’
  - If the presence status is ‘picked up’ it becomes unknown’ again.
*/
export const getButtonLabel = (presenceStatus) => {
  if (presenceStatus === 'unknown')
  {
    return 'present';
  } else if (presenceStatus === 'present') {
    return 'picked up';
  } else if(presenceStatus === 'picked up'){
    return 'unknown'
  }
}