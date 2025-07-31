function registerComponent() {
  Alpine.data('lightbox',function() {
    return {
      urls: [
        'https://gclnk.com/XRUZXtbp',
        'https://gclnk.com/HPhAjhEl',
        'https://gclnk.com/uT7H8pQj',
        'https://gclnk.com/wxTKNSI1',
        'https://gclnk.com/NucpsQPd',
      ],
      index: 0,
    }
  });
}

document.addEventListener('alpine:init',registerComponent,false);