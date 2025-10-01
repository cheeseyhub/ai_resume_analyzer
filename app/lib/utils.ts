export function formatSize(bytes:number): string {
  if (bytes === 0) return '0 Bytes';
  
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'GB'];
  
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  
  
  
  return '';
}