class ToDoList

  attr_reader :tasks

  def initialize(title="untitled")
    @born_on = Time.new
    @tasks = []
    if title == "untitled"
      @title = "untitled, #{@born_on.month}/#{@born_on.day}"
    else @title = title
    end
  end

  def new_task(task)
    @tasks << task.to_s
  end

  def finished(task)
    p "Done with #{task}!"
    @tasks.delete(task)
  end
end

list = ToDoList.new
list.new_task("blog")
p list.tasks
list.finished("blog")