	const card2 = {
		margin: '10px 0'
	};
	const heart = {
		color: '#ff78ae'
	};
		class Title extends React.Component{
			render(){
				return(
					<h1>About Me!</h1>

				);
			}
		}
		class TTC extends React.Component{
			render(){
				return(
		<div>
		<h2>Thông tin chung</h2>
		<strong>{this.props.date} - {this.props.name} - POST</strong><br />
		Tôi hiện tại đang học tập và làm việc tại FPT Education, tôi có sở thích lập trình và đặc biệt là lập trình và thiết kế Website.
		Tôi được học tập tại trường chuyên ngành "Thiết Kế Website", bằng kiến thức tôi có được tôi tự tin thiết kế Website cho riêng mình.
		<hr />
		<h2>Khó khăn khi tôi bắt đầu học lập trình</h2>
		<p>Tôi đã bắt đầu học PHP ở kì Summer 2017(6/2017 - 10/2017) tại trường, thú thực thời gian đầu tôi học khá khó khăn vì tôi học khá là yếu môn lập trình, đặc biệt là theo hướng đối tượng thế là tôi mất hết kiến thức, mất hết căn bản chính điều này đã làm khó tôi ở môn PHP2 tiếp theo.</p>
		<h2>Điều gì khiến tôi thay đổi suy nghĩ và liên tục đạt nhiều thành tích tại trường</h2>
		<p>Điều tôi suy nghĩ đầu tiên là gia đình, gia đình luôn là nguồn cảm hứng và động lực lớn giúp tôi thay đổi suy nghĩ tiêu cực.</p>
		<p>Điều khiến tôi thay đổi tiếp theo là đam mê, quả thực khi bạn học lập trình nhưng bạn không đam mê, không cần cù, siêng năng, bạn học chỉ là niềm đam mê tức thời do(việc làm, kiềm nhiều tiền,...) thì những kiến thức bạn có được chỉ là kiến thức nhồi nhét, học trước nhưng quên sau, tiếp đó sẽ là chuỗi ngày dài lủng kiến thức, mất định hướng và điều tồi tệ nhất là bạn thay đổi suy nghĩ của mình và chuyển hướng qua ngành khác. Tôi thì không như thế, tôi yêu lập trình, tôi xem lập trinh là một người bạn, là niềm đam mê vững chắc và mãi không thay đổi.</p>
		<h2>Tôi đã học Node.JS như thế nào <i className="fas fa-heart" style={heart} ></i> <i className="fas fa-heart" style={heart}></i> <i className="fas fa-heart" style={heart}></i></h2>
		<p>Sau khi đã vững kiến thức cũng như lập trình hướng đối tượng, mô hình MVC của PHP, ngôn ngữ tiếp theo tôi chọn là Node.JS</p>
		<p>Tôi gặp gỡ và biết Node khá bình thường qua một người bạn tên Lĩ** bạn này khá là giỏi về thiết kế Mock-Up cho Website. Bạn Lĩ** trong diễn đàn mọi người bàn tán về Node nhưng bạn lại không hiểu ngôn ngữ này có lợi ích gì, nó viết cho ứng dụng gì thế là bạn hỏi tôi (Tú chú có biết ngôn ngữ lập trình Node.JS không?) tôi trả lời cậu ấy bằng một cái lắc đầu (Sao tao biết). Sau đó hai thằng mở trình duyệt lên xem thử nó là cái gì mà mọi người bàn tán xôn xao như thế...Chà có vẻ ngôn ngữ này là FrameWork của Javascript, ê chú nhìn này nó có thể Build Website Realtime cơ đấy WOW Lĩ** nói, cả hai mắt tôi lúc đó mở to tựa như thấy tiền vậy thế là tôi thích nó và tìm hiểu học nó qua những Website nước ngoài và đặc biệt là qua Youtube cho tới bây giờ.</p>
		</div>
		

				);
			}
		}
		class MXH extends React.Component{
			render(){
				return(
					<div>
	<h2>Social Media</h2>
    <div className="card" id="card1">
      <div className="card-body">
        <h5 className="card-title"><i className="fab fa-facebook" id="card1"></i>  Facebook</h5>
        <p className="card-text">Tôi đã tham gia cộng đồng Facebook</p>
        <a href="https://www.facebook.com/tudinh.acousticguitar" className="btn btn-primary">Liên hệ</a>
      </div>
    </div>
    <div className="card" id="card2" style={card2}>
      <div className="card-body">
        <h5 className="card-title"><i className="fab fa-youtube" id="card2"></i>  Youtube</h5>
        <p className="card-text">Tôi đã tham gia cộng đồng Youtube</p>
        <a href="https://www.youtube.com/c/tudinhacoustic" className="btn btn-primary">Liên hệ</a>
      </div>
    </div>
					</div>
				);
			}
		}

		ReactDOM.render(
		<div className="container">
			<div className="row">
				<div className="col-md-12">
					<Title />
<img src="https://scontent.fsgn2-4.fna.fbcdn.net/v/t1.0-9/31492115_919648238213849_7279761492491800490_n.jpg?_nc_cat=0&oh=8f041bbce916a49d08acd35b625fde41&oe=5C054C34" className="hope" alt="Đinh Nguyễn Cẩm Tú" width="250" height="250"/>
				</div>
			</div>
			<div className="row">
				<div className="col-md-8">
					<TTC name={"Đinh Nguyễn Cẩm Tú"} date={"25/08/2018"} />
				</div>
				<div className="col-md-4">
					<MXH />
				</div>
			</div>
		</div>,document.getElementById("article")
		);