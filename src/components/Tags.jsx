import Badge from 'react-bootstrap/Badge';

const Tags = ({colorBadge, texto }) => {
return (
<Badge pill bg={colorBadge}>
{texto}
</Badge>

  );
 };  

export default Tags; 