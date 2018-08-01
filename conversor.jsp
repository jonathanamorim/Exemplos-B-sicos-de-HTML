<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>WEB 1</title>
</head>
<body>
	<p>
		<form method="post" action="">
			<p>Celius to Fahrenheit:
				<input type="text" name="cel">
				<input type="submit" value="Converter">
			</p>
		</form>
		<%	String s2 = request.getParameter("cel");
			if(s2 == null || s2.equals("")){
				out.print("");
			}else{
				float c = Float.parseFloat(s2);
				float f = 32 + 9 * c / 5;
				out.print(f);
			}
		%>
				<form method="post" action="">
			<p>Celius to Kelvin:
				<input type="text" name="cel1">
				<input type="submit" value="Converter">
			</p>
		</form>
		<%	String s1 = request.getParameter("cel1");
			if(s1 == null || s1.equals("")){
				out.print("");
			}else{
				float c = Float.parseFloat(s1);
				float k = c + 273;
				out.print(k);
			}
		%>
	</p>
</body>
</html>