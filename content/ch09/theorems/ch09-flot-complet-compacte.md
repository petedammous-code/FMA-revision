---
id: ch09-flot-complet-compacte
type: theorem
chapter: 9
title: Sur une sous-variété compacte, le flot d'un champ tangent est défini sur $\mathbb R\times S$
ref: Théorème IX.8.9
page: 175
importance: 3
depends: [ch07-lemme-des-bouts, ch09-flot-global-sous-variete-def, ch09-flot-local-sous-variete, ch09-courbe-integrale-maximale-sous-variete, ch09-flot-propriete-groupe, ch07-translation-temps-autonome, ch09-courbe-integrale-reste-dans-sous-variete-fermee]
tags: [flot, flot-global, compacite, temps-de-vie, lemme-des-bouts, sous-variete, champ-tangent, solution-globale]
---
## Intuition

> 💡 **Sur une surface compacte, une particule n'a nulle part où s'enfuir.** Une courbe intégrale d'un champ autonome ne peut s'arrêter en un temps fini que si elle « s'échappe » : elle part à l'infini, ou elle s'approche du bord de l'espace où elle vit (elle finit par quitter tout compact : lemme des bouts, [[ch07-lemme-des-bouts]]). Sur une sous-variété compacte $S$ (sphère, tore...), les deux sont impossibles : la trajectoire reste dans le compact $S$, donc elle vit pour tous les temps, passés et futurs.

Le mécanisme est celui du lemme des bouts : en chaque point de $S$, le théorème du flot local ([[ch09-flot-local-sous-variete]]) garantit une durée de vie $\epsilon_z>0$ ; par compacité, une durée $2\epsilon$ **uniforme** convient pour tous les points de $S$ à la fois ; on peut alors toujours « relancer » la solution pour une durée $\epsilon$ de plus.

Notations ([[ch09-flot-global-sous-variete-def]]). $X : S\to\R^N$ est un champ de vecteurs tangents indépendant du temps ($X(x)\in T_xS$) ; on prend $I=\R$, et $J(x)$ désigne l'intervalle de vie (ouvert, contenant $0$) de la courbe intégrale maximale $\alpha_x$ de condition initiale $(0,x)$ ([[ch09-courbe-integrale-maximale-sous-variete]]) ; $D_0=\{(t,x)\in\R\times S\mid t\in J(x)\}$ et $F_t\cdot x=F(t,x)=\alpha_x(t)$. $X$ est **lipschitzien** s'il existe $K\geq 0$ tel que $\norm{X(x)-X(y)}\le K\norm{x-y}$ pour tous $x,y\in S$.

## Énoncé

**Théorème (poly, Théorème IX.8.9, p. 175).** Soit $X$ un champ de vecteurs tangents qui ne dépend pas du temps et lipschitzien sur une sous-variété compacte $S$ de $\R^N$. Alors le domaine de définition de son flot global est
$$
D_0=\R\times S .
$$
Autrement dit, pour tout $x\in S$, $J(x)=\R$ : toutes les courbes intégrales maximales sont définies sur $\R$ tout entier. En conséquence, la formule (IX.8.3) $F_s\cdot(F_t\cdot x)=F_{t+s}\cdot x$ ([[ch09-flot-propriete-groupe]]) est valide quels que soient $t,s\in\R$ et $x\in S$.

## Hypothèses

### H1 — $X$ ne dépend pas du temps

**Rôle.** La durée de vie garantie par le flot local en $(0,z)$ ne dépend que du point $z$, ce qui permet de la rendre uniforme sur $S$ par compacité ; et translater en temps une courbe intégrale en donne une autre ([[ch07-translation-temps-autonome]]), ce qui permet de relancer la solution à l'instant $b-\epsilon$ à partir d'une courbe issue de l'instant $0$.

**Si on la retire.** Pour un champ $X : I\times S\to\R^N$ avec $I\ne\R$, la conclusion n'a plus de sens : les intervalles de vie sont contenus dans $I$ (par exemple $X=0$ sur $]-1,1[\times\mathbb S^1$ donne $J_0(x)=\,]-1,1[$). Si $I=\R$, la conclusion reste vraie mais la preuve change : on recouvre, pour chaque $T>0$, le compact $[-T-1,T+1]\times S$ de $\R\times S$ par des domaines de flots locaux $J_i\times U_i$ en des points $(t_i,z_i)$, ce qui fournit une durée de vie uniforme pour toutes les conditions initiales $(t_0,y)$ avec $\abs{t_0}\le T+1$ ; le même argument de relance montre alors $J_{\tau_0}(x_0)\supset[-T,T]$ pour tout $T$.

### H2 — $X$ lipschitzien

**Rôle.** Assure l'existence des flots locaux et l'unicité des courbes intégrales sur $S$ (théorème IX.8.5, [[ch09-flot-local-sous-variete]]), donc l'existence de $J(x)$ et de $F$. Sur un compact, « localement lipschitzien » suffit, car c'est équivalent : sinon il existerait $x_n\ne y_n$ dans $S$ avec $\norm{X(x_n)-X(y_n)}>n\norm{x_n-y_n}$ ; $X$ étant continu donc borné par un $M$ sur le compact $S$, $\norm{x_n-y_n}<2M/n\to0$ ; quitte à extraire, $x_n\to z\in S$ et $y_n\to z$ ; si $X$ est $K$-lipschitzien sur un voisinage de $z$ dans $S$, on obtient $n<K$ pour $n$ grand : absurde. En particulier, tout champ tangent de classe $C^1$ sur $S$ compacte convient.

**Si on la retire.** Le flot n'est plus défini. Sur le compact $\mathbb S^1$, le champ tangent continu $X(q)=2\abs{q_2}^{1/2}(-q_2,q_1)$ s'écrit, en posant $q=(\cos\theta,\sin\theta)$, $\theta'=2\abs{\sin\theta}^{1/2}$ ; issue de $\theta=0$, il y a la solution constante et une solution qui part (l'intégrale $\int_0^{\theta}\frac{d\varphi}{2\sqrt{\sin\varphi}}$ converge en $0$, ce qui permet de quitter $0$ en temps fini) : pas d'unicité, pas de « courbe intégrale maximale ».

### H3 — $S$ compacte

**Rôle.** C'est elle qui permet d'extraire un sous-recouvrement fini, donc une durée de vie $2\epsilon$ **uniforme** sur $S$. Toute courbe intégrale reste, par définition, dans $S$ : la compacité de $S$ remplace l'hypothèse « la trajectoire reste dans un compact » du lemme des bouts.

**Si on la retire.**
* *Fermée ne suffit pas* : $S=\R$ (fermée dans $\R$), $X(x)=x^2$, $\alpha_1(t)=\frac1{1-t}$, $J(1)=\,]-\infty,1[$ (explosion en temps fini).
* *Bornée ne suffit pas* : $S=\,]0,1[$, $X=1$, $\alpha_x(t)=x+t$, $J(x)=\,]-x,1-x[$ (sortie de $S$ en temps fini, vers le point $1\notin S$).
* *Une sous-variété compacte privée d'un point* : $S=\mathbb S^1\setminus\{(1,0)\}$, $X(q)=(-q_2,q_1)$ ; la trajectoire tourne et tombe en temps fini sur le point retiré, $J(q)$ est un intervalle de longueur $2\pi$ (voir [[ch09-flot-global-ouvert-regulier]], exemple 1).

La compacité est suffisante, pas nécessaire : sur $S=\R$, $X=1$ donne $F_t\cdot x=x+t$, défini pour tout $t$.

## Idée de la preuve

Par compacité de $S$, une durée $2\epsilon>0$ fournie par des flots locaux convient pour **toutes** les conditions initiales $(0,y)$, $y\in S$. Si $b=\sup J(x_0)<+\infty$, on relance la solution depuis son point à l'instant $b-\epsilon$ pour une durée $2\epsilon$ : elle se prolonge jusqu'à $b+\epsilon$, contradiction.

## Preuve

*Le poly dit seulement : « les courbes intégrales d'un champ de vecteurs tangents sont définies sur $\R$ tout entier grâce au théorème VII.3.10 ». Le théorème VII.3.10 ([[ch07-lemme-des-bouts]]) est énoncé pour un champ sur un ouvert d'un espace de Banach, ce que $S$ n'est pas ; on reprend donc sa preuve, mot pour mot, sur $S$, avec le flot local du théorème IX.8.5 à la place de celui du théorème VII.2.12. Une lecture « extrinsèque » permettant d'appliquer VII.3.10 tel quel est donnée en remarque à la fin.*

**Étape 1 : une durée de vie uniforme.** Pour tout $z\in S$, le théorème IX.8.5 ([[ch09-flot-local-sous-variete]]) donne un flot local $(E(J_z,\epsilon_z),U_z,F)$ en $(0,z)$ : $U_z$ est un ouvert de $S$ contenant $z$, $J_z$ un intervalle ouvert contenant $0$, et pour tout $y\in U_z$ il existe une courbe intégrale de condition initiale $(0,y)$ définie sur $]-\epsilon_z,\epsilon_z[$ (on prend $t_0=0\in J_z$) ; donc $]-\epsilon_z,\epsilon_z[\subset J(y)$. Les $U_z$, $z\in S$, recouvrent le compact $S$ ; on en extrait un sous-recouvrement fini $S=U_{z_1}\cup\dots\cup U_{z_n}$. Posons $\epsilon=\frac12\min_i\epsilon_{z_i}>0$. Alors
$$
\text{pour tout }y\in S,\qquad]-2\epsilon,2\epsilon[\ \subset J(y).
$$

**Étape 2 : relance.** Soit $x_0\in S$, $\alpha=\alpha_{x_0} : J(x_0)\to S$ et $b=\sup J(x_0)$. Supposons $b<+\infty$. Comme $J(x_0)$ est un intervalle contenant $]-2\epsilon,2\epsilon[$, on a $b\ge2\epsilon$, donc $b-\epsilon\in\,]0,b[\subset J(x_0)$. Posons $y_0=\alpha(b-\epsilon)\in S$ et $\beta=\alpha_{y_0}$, définie au moins sur $]-2\epsilon,2\epsilon[$ par l'étape 1. Comme $X$ ne dépend pas du temps, $\gamma(t)=\beta\big(t-(b-\epsilon)\big)$ est une courbe intégrale définie sur $]b-3\epsilon,b+\epsilon[$, et $\gamma(b-\epsilon)=y_0=\alpha(b-\epsilon)$.

Les courbes intégrales $\alpha$ et $\gamma$ ont la même condition initiale $(b-\epsilon,y_0)$ ; par unicité sur $S$ (étape 0 de la preuve de [[ch09-flot-propriete-groupe]]), elles coïncident sur $J(x_0)\cap\,]b-3\epsilon,b+\epsilon[$. La courbe égale à $\alpha$ sur $J(x_0)$ et à $\gamma$ sur $]b-3\epsilon,b+\epsilon[$ est donc bien définie ; c'est une courbe intégrale (la condition $\alpha'(t)=X(\alpha(t))$ est locale) définie sur l'intervalle ouvert $J(x_0)\cup\,]b-3\epsilon,b+\epsilon[$, qui contient $0$, et elle vaut $x_0$ en $0$. Par définition de $J(x_0)$ comme réunion de tels intervalles, $b+\epsilon\le\sup J(x_0)=b$ : contradiction. Donc $b=+\infty$.

**Étape 3 : le passé.** De même, si $a=\inf J(x_0)>-\infty$, on relance depuis $\alpha(a+\epsilon)$ : $t\mapsto\alpha_{\alpha(a+\epsilon)}\big(t-(a+\epsilon)\big)$ est une courbe intégrale sur $]a-\epsilon,a+3\epsilon[$ qui prolonge $\alpha$ au-delà de $a$ : contradiction. Donc $J(x_0)=\R$ pour tout $x_0\in S$, c'est-à-dire $D_0=\R\times S$. Enfin, les conditions $(t,x)\in D_0$ et $(s,F_t\cdot x)\in D_0$ de la formule (IX.8.3) sont alors toujours satisfaites. $\square$

*Remarque (lecture extrinsèque, via le théorème VII.3.10).* Supposons que $X$ soit la restriction à $S$ d'un champ $\tilde X : U\to\R^N$ lipschitzien sur un ouvert $U\supset S$ (cadre de la proposition IX.8.1). Une sous-variété compacte est fermée ; d'après la proposition IX.8.1 ([[ch09-courbe-integrale-reste-dans-sous-variete-fermee]]), la courbe intégrale maximale de $\tilde X$ issue de $x_0\in S$ reste dans $S$, c'est donc une courbe intégrale de $X$ sur $S$, et réciproquement toute courbe intégrale de $X$ sur $S$ en est une de $\tilde X$ : les deux intervalles de vie coïncident. La trajectoire reste dans le compact $S\subset U$, et le théorème VII.3.10 appliqué à $\tilde X$ donne $J(x_0)=\R$.

## Preuve à trous

*Étape 1.* Pour tout $z\in S$, un flot local en $(0,z)$ fournit un ouvert $U_z\ni z$ de $S$ et $\epsilon_z>0$ avec $]-\epsilon_z,\epsilon_z[\subset J(y)$ pour tout $y\in U_z$. <trou indice="quelle hypothèse sur S utiliser, et comment ?">Par compacité de $S$, on extrait un sous-recouvrement fini $U_{z_1},\dots,U_{z_n}$</trou> et l'on pose $\epsilon=\frac12\min_i\epsilon_{z_i}$, de sorte que <trou>$]-2\epsilon,2\epsilon[\subset J(y)$ pour **tout** $y\in S$</trou>.

*Étape 2.* Supposons $b=\sup J(x_0)<+\infty$. Alors $b-\epsilon\in J(x_0)$ ; soit $y_0=\alpha_{x_0}(b-\epsilon)$. <trou indice="relancer, en utilisant que X ne dépend pas du temps">La courbe $t\mapsto\alpha_{y_0}(t-(b-\epsilon))$ est une courbe intégrale définie sur $]b-3\epsilon,b+\epsilon[$, qui vaut $\alpha_{x_0}(b-\epsilon)$ en $b-\epsilon$</trou> ; par unicité elle coïncide avec $\alpha_{x_0}$ sur l'intersection des domaines, et le recollement est une courbe intégrale de condition initiale $(0,x_0)$ définie jusqu'à $b+\epsilon$, <trou indice="d'où la contradiction ?">ce qui contredit la définition de $b$ comme borne supérieure de l'intervalle de vie maximal $J(x_0)$</trou>. Même raisonnement pour la borne inférieure : $J(x_0)=\R$. $\square$

## Exemples

**Exemple 1 (rotations de la sphère).** $S=\mathbb S^2$, $X(p)=e_3\wedge p$ : $F_t$ est la rotation d'axe $e_3$ et d'angle $t$, définie pour tout $t\in\R$ ([[ch09-flot-propriete-groupe]], exemple 1). Le théorème le prédisait sans calcul : $\mathbb S^2$ est compacte (fermée bornée de $\R^3$) et $X$ est linéaire, donc lipschitzien.

**Exemple 2 (même équation, avec et sans compacité).** Sur $S=\mathbb S^2$, soit $X(p)=e_3-\langle e_3,p\rangle\,p$ (projection de $e_3$ sur $T_p\mathbb S^2=p^\perp$ : c'est le gradient de la fonction hauteur sur la sphère, cf. [[ch09-ex-fonction-hauteur]]). On a $\langle X(p),p\rangle=p_3-p_3\norm p^2=0$ : $X$ est tangent, et polynomial donc lipschitzien sur le compact $\mathbb S^2$. Le théorème garantit $D_0=\R\times\mathbb S^2$. Vérifions-le : la troisième coordonnée $z=p_3$ vérifie
$$
z'=1-z^2 ,
$$
et l'on trouve explicitement, pour $p=(x,y,z)\in\mathbb S^2$,
$$
F_t\cdot p=\frac{\big(x,\ y,\ z\cosh t+\sinh t\big)}{\cosh t+z\sinh t},
$$
bien défini pour tout $t\in\R$ car $\cosh t+z\sinh t\ge\cosh t-\abs{\sinh t}=e^{-\abs t}>0$ (puisque $\abs z\le1$). On vérifie que $F_0\cdot p=p$, que $\frac{d}{dt}\big|_{t=0}F_t\cdot p=(-zx,-zy,1-z^2)=X(p)$, et que $F_t\cdot p\in\mathbb S^2$ : $(x^2+y^2)+(z\cosh t+\sinh t)^2-(\cosh t+z\sinh t)^2=(1-z^2)+(z^2-1)(\cosh^2t-\sinh^2t)=0$. En fait l'équation est vérifiée pour tout $t$ : en notant $\delta(t)=\cosh t+z\sinh t$ et $w(t)=(z\cosh t+\sinh t)/\delta(t)$, on a $\delta'=z\cosh t+\sinh t=w\delta$, donc $\frac{d}{dt}\frac{x}{\delta}=-\frac{x}{\delta}\,w$ (première coordonnée de $X$ au point $F_t\cdot p$), de même pour $y$, et $w'=\frac{\delta^2-(z\cosh t+\sinh t)^2}{\delta^2}=1-w^2$. Toutes les trajectoires sont globales ; les pôles $\pm e_3$ sont fixes et toute autre trajectoire monte du pôle sud vers le pôle nord $e_3$.

À l'inverse, la **même** équation $z'=1-z^2$ posée sur $S=\R$ (non compacte) explose : pour $z(0)=2$, la solution est $z(t)=\coth(t+c)$ avec $\coth c=2$, soit $c=\frac12\ln3$ ($\frac{d}{dt}\coth(t+c)=-\frac1{\sinh^2(t+c)}=1-\coth^2(t+c)$), et $J(2)=\,]-\tfrac12\ln3,+\infty[$ : explosion dans le passé. Sur la sphère, la compacité confine $z$ dans $[-1,1]$, où cela ne peut pas arriver.

**Exemple 3 (usage typique en exercice).** Pour montrer qu'un système $x'=X(x)$ dans $\R^N$ a des solutions globales, on cherche une sous-variété compacte $S$ **invariante** à laquelle $X$ est tangent : par exemple, si $X$ est $C^1$ et $\langle X(x),x\rangle=0$ pour tout $x$, alors $\frac{d}{dt}\norm{x(t)}^2=0$ ; $X$ est tangent à chaque sphère $\{\norm x=r\}$ ($r>0$), compacte, et toute solution non nulle est définie sur $\R$ (la solution nulle aussi : en faisant tendre $x=\eps v\to0$ dans $\langle X(\eps v),v\rangle=0$, on obtient $X(0)=0$) (le cas du moment cinétique $M'=\Omega\wedge M$ avec $\Omega$ constant).

## Pièges

* > ⚠️ C'est la **compacité** de $S$ qui compte, pas la fermeture ($S=\R$, $X=x^2$) ni le caractère borné ($S=\,]0,1[$, $X=1$).
* > ⚠️ Le théorème VII.3.10 ne s'applique pas tel quel : $S$ n'est pas un ouvert de $\R^N$ (sauf si $m=N$). Soit on reprend sa preuve sur $S$ avec les flots locaux du théorème IX.8.5, soit on prolonge $X$ à un ouvert et l'on utilise la proposition IX.8.1.
* Le champ doit être **tangent** à $S$ ; un champ seulement défini sur $\R^N$ et non tangent à $S$ fait sortir les trajectoires de $S$, et la compacité de $S$ ne dit plus rien.
* Le théorème dit que les trajectoires sont définies sur $\R$, pas qu'elles sont périodiques (exemple 2 : elles convergent vers les pôles).
* Un champ tangent de classe $C^1$ sur $S$ compacte est automatiquement lipschitzien (hypothèse H2) : dans les exercices, il suffit de vérifier « $C^1$ et tangent ».
* Conséquence immédiate : chaque $F_t$ est défini sur tout $S$, et $t\mapsto F_t$ est un morphisme de groupes de $\R$ dans les difféomorphismes de $S$ ([[ch09-flot-morphisme-groupes-diffeos]]).
