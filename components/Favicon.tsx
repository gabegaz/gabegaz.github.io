export function FaviconDesign({ 
  fontSize = 24, 
  borderRadius = '4px' 
}: { 
  fontSize?: number; 
  borderRadius?: string;
}) {
  return (
    <div
      style={{
        fontSize: `${fontSize}px`,
        background: '#3b82f6',
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        borderRadius,
        fontWeight: 'bold',
      }}
    >
      G
    </div>
  );
}
