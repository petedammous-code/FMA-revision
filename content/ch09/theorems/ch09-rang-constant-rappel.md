---
id: ch09-rang-constant-rappel
type: proposition
chapter: 9
title: Théorème du rang constant (rappel)
ref: Remarque IX.1.4
page: 148
importance: 2
depends: [ch06-theoreme-rang-constant, ch06-inversion-locale, ch05-differentielle-nulle-constante, ch05-composition-differentielles, ch09-immersion-submersion-def]
tags: [rang-constant, forme-normale, immersion, submersion, inversion-locale, diffeomorphisme]
---
## Intuition

> 💡 En algèbre linéaire, toute matrice de rang $r$ s'écrit $\begin{pmatrix}I_r&0\\0&0\end{pmatrix}$ après changement de base à la source et au but. Le théorème du rang constant est la version **non linéaire** et **locale** : si le rang de $df_x$ ne bouge pas près de $a$, alors, après des changements de **coordonnées** (des difféomorphismes) à la source et au but, $f$ devient localement la projection-injection $(x_1,\dots,x_n)\mapsto(x_1,\dots,x_r,0,\dots,0)$.

Cas particuliers : une **immersion** ($df_a$ injective, $r=n$) est localement l'injection $x\mapsto(x,0)$ ; une **submersion** ($df_a$ surjective, $r=m$) est localement la projection $(x_1,\dots,x_n)\mapsto(x_1,\dots,x_m)$ ([[ch09-immersion-submersion-def]]). Ce sont les deux formes normales qui fondent tout le chapitre.

Rappel : le **rang** de $df_x$ est $\dim df_x(\R^n)$, égal au rang de la matrice jacobienne $J_f(x)$ ; un $C^p$-**difféomorphisme** est une bijection $C^p$ entre ouverts d'inverse $C^p$ ([[ch06-diffeomorphisme-def]]).

## Énoncé

**Proposition (poly, Remarque IX.1.4, p. 148 ; démontrée dans l'Exercice VI.4.9, p. 125).** Soit $f : U\to\R^m$ de classe $C^p$ ($p\ge1$) sur un ouvert $U$ de $\R^n$, et $a\in U$. Si $df_x$ est de rang constant égal à $r$ pour tout $x$ dans un voisinage de $a$, alors, à des difféomorphismes près à la source et au but, $f$ s'écrit localement $(x_1,\dots,x_n)\mapsto(x_1,\dots,x_r,0,\dots,0)$.

Précisément (Exercice VI.4.9, 3) : il existe un $C^p$-difféomorphisme $\Phi : U_2\to U_1$ d'un ouvert $U_2$ de $\R^n$ sur un voisinage ouvert $U_1$ de $a$ dans $U$, et un $C^p$-difféomorphisme $\Psi : W_1\to W_2$ d'un voisinage ouvert $W_1$ de $f(a)$ dans $\R^m$ sur un ouvert $W_2$ de $\R^m$, tels que $f(U_1)\subset W_1$ et
$$
\Psi\circ f\circ\Phi : U_2\to W_2,\qquad (x_1,\dots,x_n)\mapsto(x_1,\dots,x_r,0,\dots,0).
$$

Cas particuliers (Exercice VI.4.9, 2 pour la submersion et 1 pour l'immersion) : si $df_a$ est **surjective**, il existe $\Phi:U_2\to U_1$ comme ci-dessus avec $f\circ\Phi(x_1,\dots,x_n)=(x_1,\dots,x_m)$ ; si $df_a$ est **injective**, il existe $\Psi : W_1\to W_2$ comme ci-dessus et un voisinage ouvert $U_1$ de $a$ avec $f(U_1)\subset W_1$ et $\Psi\circ f(x)=(x,0)$ pour $x\in U_1$. Dans ces deux cas l'hypothèse de rang constant est **automatique**.

## Hypothèses

### H1 — $f$ de classe $C^p$, $p\ge1$

**Rôle.** La preuve applique le théorème d'inversion locale ([[ch06-inversion-locale]]), qui demande $C^1$ ; les difféomorphismes obtenus sont de la classe $C^p$ de $f$. La continuité de $x\mapsto df_x$ sert aussi à montrer que, pour une immersion ou une submersion en $a$, le rang est constant près de $a$.

**Si on la retire.** C'est une hypothèse de méthode : sans continuité de la différentielle, l'inversion locale (et donc cette preuve) n'est plus disponible, et l'énoncé n'a même plus de sens précis (de quelle classe seraient $\Phi$, $\Psi$ ?). Pour le cas « submersion/immersion en $a$ », la conclusion devient fausse : $f(t)=t+2t^2\sin(1/t)$, $f(0)=0$, est dérivable, $f'(0)=1$, mais $f$ n'est injective sur aucun voisinage de $0$ (voir [[ch09-immersion-locale-homeo]]), alors que $\Psi\circ f\circ\Phi=\mathrm{id}$ forcerait $f$ injective près de $0$.

### H2 — rang constant **au voisinage** de $a$ (pas seulement en $a$)

**Rôle.** C'est ce qui force, dans la preuve, la fonction $g$ à ne pas dépendre des $n-r$ dernières variables (étape 2).

**Si on la retire.** $f(x)=x^2$ sur $\R$ : $df_0=0$ est de rang $0$, mais $df_x$ est de rang $1$ pour $x\neq0$. Si l'on avait $\Psi\circ f\circ\Phi\equiv0$ près de $\Phi^{-1}(0)$, l'injectivité de $\Psi$ forcerait $f$ constante près de $0$ : faux. Et la forme $\Psi\circ f\circ\Phi=\mathrm{id}$ (rang $1$) est impossible aussi : sa différentielle en $\Phi^{-1}(0)$ vaudrait $d\Psi_0\circ df_0\circ d\Phi=0$. Même chose pour $f(x)=x^3$, qui est pourtant un homéomorphisme.

## Idée de la preuve

On rend le bloc $r\times r$ de la jacobienne inversible, puis on change de coordonnées à la source par $\varphi(x)=(f'(x),x'')$ (inversion locale) : $f\circ\Phi(y)=(y',g(y))$. Le rang constant force $\partial g/\partial y''=0$, donc $g=h(y')$ ; on tue $h$ au but par $\Psi(z',z'')=(z',z''-h(z'))$.

## Preuve

*Le poly renvoie à l'exercice VI.4.9 ([[ch06-theoreme-rang-constant]]) ; voici une preuve complète, dans l'esprit de l'indication de l'exercice.*

**Étape 0 : réductions.** Les translations et les permutations de coordonnées (à la source dans $\R^n$, au but dans $\R^m$) sont des difféomorphismes $C^\infty$ ; on peut les absorber dans $\Phi$ et $\Psi$. Comme $J_f(a)$ est de rang $r$, elle possède un mineur $r\times r$ non nul ; on peut donc supposer $a=0$, $f(a)=0$, et que le bloc supérieur gauche $\big(\frac{\partial f_i}{\partial x_j}(0)\big)_{1\le i,j\le r}$ est inversible. On écrit $x=(x',x'')\in\R^r\times\R^{n-r}$ et $f=(f',f'')$ avec $f'=(f_1,\dots,f_r)$, $f''=(f_{r+1},\dots,f_m)$. Soit enfin $U_0\subset U$ un voisinage ouvert de $0$ sur lequel $\operatorname{rg} df_x=r$.

**Étape 1 : changement de coordonnées à la source.** Soit $\varphi : U_0\to\R^n$, $\varphi(x)=(f'(x),x'')$, de classe $C^p$. Sa jacobienne en $0$ est
$$
J_\varphi(0)=\begin{pmatrix}\frac{\partial f'}{\partial x'}(0)&\frac{\partial f'}{\partial x''}(0)\\ 0&I_{n-r}\end{pmatrix},
$$
triangulaire par blocs à blocs diagonaux inversibles, donc inversible. Par [[ch06-inversion-locale]], $\varphi$ est un $C^p$-difféomorphisme d'un voisinage ouvert $U_1'\subset U_0$ de $0$ sur un ouvert $U_2'\ni0$. Quitte à rétrécir, on prend $U_2=B'\times B''\subset U_2'$, produit de deux boules ouvertes centrées en $0$ (de $\R^r$ et $\R^{n-r}$), et $U_1=\varphi^{-1}(U_2)\cap U_1'$. Posons $\Phi=(\varphi|_{U_1})^{-1}:U_2\to U_1$. Pour $y=(y',y'')\in U_2$, la première composante de $\varphi(\Phi(y))=y$ donne $f'(\Phi(y))=y'$, donc
$$
f\circ\Phi(y)=\big(y',\,g(y)\big),\qquad g=f''\circ\Phi : U_2\to\R^{m-r}\ \text{de classe } C^p .
$$

**Étape 2 : le rang constant tue la dépendance en $y''$.** Par la règle de la chaîne ([[ch05-composition-differentielles]]), $d(f\circ\Phi)_y=df_{\Phi(y)}\circ d\Phi_y$, avec $d\Phi_y$ inversible : son rang vaut $\operatorname{rg} df_{\Phi(y)}=r$. Or
$$
J_{f\circ\Phi}(y)=\begin{pmatrix} I_r&0\\ \frac{\partial g}{\partial y'}(y)&\frac{\partial g}{\partial y''}(y)\end{pmatrix}.
$$
Les $r$ premières colonnes sont libres (leur partie haute est $I_r$). Si une colonne $j>r$ était non nulle, elle serait de la forme $(0,c)$ avec $c\neq0$ ; une combinaison $\sum_{i\le r}\lambda_i(\text{colonne } i)$ dont la partie haute est nulle a tous ses $\lambda_i$ nuls, donc vaut $0\neq(0,c)$ : on aurait $r+1$ colonnes libres, rang $\ge r+1$, contradiction. Donc $\frac{\partial g}{\partial y''}\equiv0$ sur $U_2$. Pour $y'\in B'$ fixé, $y''\mapsto g(y',y'')$ a une différentielle nulle sur la boule $B''$ (connexe), donc est constante ([[ch05-differentielle-nulle-constante]]) : $g(y',y'')=h(y')$ avec $h(y')=g(y',0)$, $h:B'\to\R^{m-r}$ de classe $C^p$, $h(0)=0$.

**Étape 3 : changement de coordonnées au but.** Soit $W_1=W_2=B'\times\R^{m-r}$, ouvert de $\R^m$ contenant $0=f(a)$, et $\Psi(z',z'')=(z',z''-h(z'))$. $\Psi$ est $C^p$, bijective de $W_1$ sur $W_2$ d'inverse $(z',w'')\mapsto(z',w''+h(z'))$, $C^p$ : c'est un $C^p$-difféomorphisme. Pour $x\in U_1$, $x=\Phi(y)$ et $f(x)=(y',h(y'))\in W_1$, donc $f(U_1)\subset W_1$, et
$$
\Psi\circ f\circ\Phi(y)=\big(y',\,h(y')-h(y')\big)=(y',0)=(y_1,\dots,y_r,0,\dots,0).
$$

**Étape 4 : immersions et submersions.** Si $df_a$ est surjective ($r=m\le n$) ou injective ($r=n\le m$), alors $r=\min(n,m)$ est le rang maximal possible ; un mineur $r\times r$ de $J_f(a)$ non nul reste non nul près de $a$ (continuité de $x\mapsto J_f(x)$, $f$ étant $C^1$), donc $\operatorname{rg}df_x\ge r$, et $\le\min(n,m)=r$ : **le rang est constant** près de $a$, et ce qui précède s'applique.
* Submersion ($r=m$) : il n'y a pas de composante $f''$ ; l'étape 1 donne directement $f\circ\Phi(y)=y'=(y_1,\dots,y_m)$.
* Immersion ($r=n$) : il n'y a pas de variable $y''$ ; on a $\Psi\circ f\circ\Phi(y)=(y,0)$, i.e. $\Psi\circ f(x)=(\Phi^{-1}(x),0)$ pour $x\in U_1$. Avec $\widetilde\Psi(z',z'')=(\Phi(z'),z'')$, $C^p$-difféomorphisme de $U_2\times\R^{m-n}$ sur $U_1\times\R^{m-n}$, on obtient $\widetilde\Psi\circ\Psi\circ f(x)=(x,0)$ (en restreignant $W_1$ à $\Psi^{-1}(U_2\times\R^{m-n})$, qui contient $f(U_1)$). $\square$

## Preuve à trous

On se ramène à $a=0$, $f(a)=0$, bloc $r\times r$ supérieur gauche de $J_f(0)$ inversible, et $f=(f',f'')$, $x=(x',x'')$.

On pose <trou indice="on garde les r premières composantes de f comme nouvelles coordonnées">$\varphi(x)=(f'(x),x'')$, dont la jacobienne en $0$ est triangulaire par blocs, de blocs diagonaux $\frac{\partial f'}{\partial x'}(0)$ et $I_{n-r}$, donc inversible</trou>. Par inversion locale, $\Phi=\varphi^{-1}:U_2=B'\times B''\to U_1$ est un $C^p$-difféomorphisme et $f\circ\Phi(y)=(y',g(y))$.

La jacobienne de $f\circ\Phi$ est $\begin{pmatrix}I_r&0\\ \partial_{y'}g&\partial_{y''}g\end{pmatrix}$ et son rang vaut $r$ car <trou indice="règle de la chaîne + hypothèse sur le rang">$d(f\circ\Phi)_y=df_{\Phi(y)}\circ d\Phi_y$ avec $d\Phi_y$ inversible et $\operatorname{rg}df_{\Phi(y)}=r$</trou>. Donc <trou indice="une colonne non nulle supplémentaire ferait monter le rang">$\partial_{y''}g\equiv0$, et comme $B''$ est connexe, $g(y)=h(y')$</trou>.

Enfin <trou indice="on retranche h au but">$\Psi(z',z'')=(z',z''-h(z'))$, difféomorphisme d'inverse $(z',w'')\mapsto(z',w''+h(z'))$</trou>, donne $\Psi\circ f\circ\Phi(y)=(y',0)$. $\square$

## Exemples

* **Rang 1 dans $\R^2$.** $f(x,y)=\big(x+y,(x+y)^2\big)$ : $J_f=\begin{pmatrix}1&1\\2(x+y)&2(x+y)\end{pmatrix}$, de rang $1$ partout. Ici $\varphi(x,y)=(x+y,y)$, $\Phi(u,v)=(u-v,v)$, $f\circ\Phi(u,v)=(u,u^2)$, donc $h(u)=u^2$ et $\Psi(z_1,z_2)=(z_1,z_2-z_1^2)$ : $\Psi\circ f\circ\Phi(u,v)=(u,0)$, et ce **globalement**.
* **Submersion.** $f(x,y)=x^2+y^2$ près de $a=(1,0)$ : $\partial_xf(a)=2\neq0$. $\varphi(x,y)=(x^2+y^2,y)$, inversible sur $\{x>0\}$ d'inverse $\Phi(u,v)=(\sqrt{u-v^2},v)$ sur $\{u>v^2\}$ ; alors $f\circ\Phi(u,v)=u$ : $f$ est une projection dans les coordonnées $(u,v)$.
* **Immersion.** $f(t)=(t,t^2)$ ($n=1$, $m=2$) : $\varphi(t)=t$, $\Phi=\mathrm{id}$, $g(t)=t^2=h(t)$, $\Psi(z_1,z_2)=(z_1,z_2-z_1^2)$, et $\Psi\circ f(t)=(t,0)$ : la parabole est « redressée » sur l'axe.

## Pièges

* > ⚠️ Le rang doit être constant sur un **voisinage** de $a$ (sauf pour immersions et submersions, où c'est automatique, étape 4). Contre-exemples : $x\mapsto x^2$, $x\mapsto x^3$ en $0$.
* Le rang de $df_x$ est seulement **semi-continu inférieurement** : il peut sauter vers le haut près de $a$ (jamais vers le bas). C'est pourquoi « rang maximal en $a$ » se propage, mais pas « rang $r$ en $a$ » en général.
* Les difféomorphismes $\Phi$, $\Psi$ ne sont pas uniques et ne sont définis que **localement** : ce n'est pas une décomposition globale de $f$.
* Ne pas confondre avec le théorème du rang de l'algèbre linéaire ($\dim\ker+\operatorname{rg}=\dim$ source), qui n'en est que la version linéaire.
