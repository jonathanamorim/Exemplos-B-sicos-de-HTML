package aula04;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/ServeletMenu")
public class ServeletMenu extends HttpServlet {
	private static final long serialVersionUID = 1L;

    public ServeletMenu() {
        super();
    }

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		doPost(request, response);
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		PrintWriter resposta = response.getWriter();
		resposta.write("<html><head><body><h2>");
		resposta.write("Menu do Sistema");
		resposta.write("<form action="+"process.php"+"method="+"post"+">");
		resposta.write("input type="+"submit"+"/>"+"/form");
		resposta.write("</h2></body></head></html>");
		
	}
	
	
}
