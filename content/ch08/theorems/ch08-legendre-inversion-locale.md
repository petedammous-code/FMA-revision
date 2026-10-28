---
id: ch08-legendre-inversion-locale
type: proposition
chapter: 8
title: "Application $\Phi(u,q,v)=(u,q,\frac{\partial L}{\partial v}(u,q,v))$ (« transformation de Legendre », nom non employé par le poly) : difféomorphisme local, $v=g(u,q,p)$"
ref: "Question 13, p. 146 (non numérotée, section VIII)"
page: 146
importance: 2
depends: [ch08-lagrangien-regulier, ch06-inversion-locale, ch05-differentielles-partielles, ch05-differentiabilite-composantes, ch05-composition-differentielles, ch05-differentielle-lineaire, ch05-isometrie-bilineaire-curryfication, ch05-isomorphisme-banach]
tags: [legendre, inversion-locale, lagrangien-regulier, impulsion, calcul-des-variations]
---
## Intuition

> 💡 En mécanique, on décrit l'état d'un système par sa position $q$ et sa vitesse $v$. On peut aussi le décrire par sa position et son **impulsion** $p=\frac{\partial L}{\partial v}(u,q,v)$ (pour $L=\tfrac12 m\norm v^2-U(q)$, c'est la quantité de mouvement $p=mv$). La question est : **la donnée de $p$ permet-elle de retrouver $v$ ?** C'est un problème d'inversion de l'application $v\mapsto\frac{\partial L}{\partial v}(u,q,v)$, à $(u,q)$ fixés.

En dimension $1$, si $v\mapsto\frac{\partial L}{\partial v}(u,q,v)$ a une dérivée $\frac{\partial^2L}{\partial v^2}$ non nulle, elle est strictement monotone, donc inversible. En dimension quelconque, l'analogue de « dérivée non nulle » est « $\frac{\partial^2L}{\partial v^2}(u,q,v)$ est un isomorphisme » : c'est exactement l'hypothèse de **Lagrangien régulier** ([[ch08-lagrangien-regulier]]), et le théorème d'inversion locale ([[ch06-inversion-locale]]) fournit alors l'inverse **local** $v=g(u,q,p)$, de classe $C^1$.

Pour pouvoir appliquer l'inversion locale (qui porte sur une application entre ouverts d'espaces de Banach), on n'inverse pas $v\mapsto p$ seule mais l'application $\Phi:(u,q,v)\mapsto(u,q,p)$, qui « recopie » $u$ et $q$ : sa différentielle est triangulaire, avec $\mathrm{Id}$, $\mathrm{Id}$ et $\frac{\partial^2L}{\partial v^2}$ sur la diagonale.

Rappels de notation : $V$ est un espace de Hilbert de dimension finie, $I$ un intervalle ouvert contenant $[0,1]$ ([[ch08-cadre-espace-courbes]]) ; $\frac{\partial L}{\partial v}(u,q,v)\in L(V;\R)$ est la différentielle partielle de $L$ par rapport à $v$ ([[ch05-differentielles-partielles]]) ; une application est un **$C^k$-difféomorphisme** si c'est une bijection de classe $C^k$ entre deux ouverts, de réciproque $C^k$ ([[ch06-diffeomorphisme-def]]).

## Énoncé

**Proposition (poly, Question 13, p. 146).** Soit $L:I\times V\times V\to\R$, $(u,q,v)\mapsto L(u,q,v)$, de classe $C^2$ et **régulier**, c'est-à-dire ([[ch08-lagrangien-regulier]], p. 145) : en tout point $(u,q,v)\in I\times V\times V$, l'application linéaire
$$
\ell_1\in V\longmapsto \frac{\partial^2L}{\partial v^2}(u,q,v)\cdot(\ell_1,\,\cdot\,)\in L(V;\R)
$$
est un isomorphisme de $V$ sur $L(V;\R)$. On pose
$$
\Phi: I\times V\times V\to I\times V\times L(V;\R),\qquad (u,q,v)\longmapsto\Big(u,q,\frac{\partial L}{\partial v}(u,q,v)\Big).
$$
Alors :

1. en tout point $(u_0,q_0,v_0)$ de $I\times V\times V$, la différentielle $d\Phi_{(u_0,q_0,v_0)}$ est un isomorphisme ;
2. par conséquent, si l'on pose $p=\frac{\partial L}{\partial v}(u,q,v)\in L(V;\R)$, on peut localement autour du point $(u_0,q_0,v_0)$ exprimer $v$ comme une fonction de classe $C^1$ de $(u,q,p)\in I\times V\times L(V;\R)$ :
$$
v=g(u,q,p).
$$

Précisément (c'est le sens de « localement ») : il existe un voisinage ouvert $\mathcal U_0$ de $(u_0,q_0,v_0)$ dans $I\times V\times V$ et un voisinage ouvert $\mathcal V_0$ de $\Phi(u_0,q_0,v_0)$ dans $I\times V\times L(V;\R)$ tels que $\Phi$ se restreigne en un $C^1$-difféomorphisme de $\mathcal U_0$ sur $\mathcal V_0$, dont la réciproque est $(u,q,p)\mapsto(u,q,g(u,q,p))$ avec $g:\mathcal V_0\to V$ de classe $C^1$. Autrement dit, pour $(u,q,v)\in\mathcal U_0$ et $(u,q,p)\in\mathcal V_0$ :
$$
p=\frac{\partial L}{\partial v}(u,q,v)\iff v=g(u,q,p).
$$

## Hypothèses

### H1 — $L$ est de classe $C^2$

**Rôle.** Elle rend $\frac{\partial L}{\partial v}$, donc $\Phi$, de classe $C^1$ : c'est l'hypothèse « $f$ de classe $C^k$, $k\ge1$ » du théorème d'inversion locale, et c'est elle qui donne un sens à $\frac{\partial^2L}{\partial v^2}$. Comme $\Phi$ n'est que $C^1$, l'inverse $g$ n'est que $C^1$ (si $L$ est $C^{k+1}$, $\Phi$ et $g$ sont $C^k$).

**Si on la retire.** Exemple vérifié : $V=\R$, $L(u,q,v)=\tfrac12 v\abs v$. Elle est $C^1$ sur $\R^3$, de dérivée partielle $\frac{\partial L}{\partial v}=\abs v$ (pour $v>0$, $L=\tfrac12v^2$ et la dérivée est $v$ ; pour $v<0$, $L=-\tfrac12v^2$ et la dérivée est $-v$ ; en $0$ le taux d'accroissement $\tfrac12\abs h$ tend vers $0$). Elle n'est pas $C^2$, car $v\mapsto\abs v$ n'est pas dérivable en $0$ ; ailleurs elle est $C^2$ avec $\frac{\partial^2L}{\partial v^2}=\pm1\neq0$, donc « régulière partout où cela a un sens ». Pourtant $\Phi(u,q,v)=(u,q,\abs v)$ n'est injective sur **aucun** voisinage de $(u,q,0)$ : $\Phi(u,q,v)=\Phi(u,q,-v)$. On ne peut donc pas exprimer $v$ en fonction de $(u,q,p)$ près de $v=0$.

### H2 — $L$ est régulier

**Rôle.** C'est le cœur de la preuve : $d\Phi$ est « triangulaire » et sa diagonale est $(\mathrm{Id},\mathrm{Id},\frac{\partial^2L}{\partial v^2})$ ; la régularité dit exactement que le dernier bloc est inversible, donc que $d\Phi$ est un isomorphisme, ce qu'exige le théorème d'inversion locale. Comme l'énoncé est local, seule la régularité **au point** $(u_0,q_0,v_0)$ sert ici.

**Si on la retire.** Exemple vérifié : $V=\R$, $L(u,q,v)=\tfrac14v^4$ ($C^\infty$), avec $\frac{\partial^2L}{\partial v^2}=3v^2$ nul en $v=0$. Alors $\Phi(u,q,v)=(u,q,v^3)$ est une bijection continue de réciproque continue $(u,q,p)\mapsto(u,q,p^{1/3})$, mais il n'existe **aucune** fonction $g$ de classe $C^1$ près de $(u,q,0)$ telle que $g(u,q,v^3)=v$ : en dérivant par rapport à $v$ en $v=0$, on obtiendrait $\frac{\partial g}{\partial p}(u,q,0)\cdot 3\cdot0^2=1$, soit $0=1$. Cas plus brutal : $L(u,q,v)=qv$ donne $\Phi(u,q,v)=(u,q,q)$, qui oublie complètement $v$.

### H3 — $V$ est de dimension finie

**Rôle.** Le théorème d'inversion locale demande que la différentielle soit un isomorphisme **bicontinu**. En dimension finie, toute application linéaire est continue, donc la bicontinuité est automatique ; de plus l'injectivité de $\ell_1\mapsto\frac{\partial^2L}{\partial v^2}(u,q,v)\cdot(\ell_1,\cdot)$ (non-dégénérescence de la forme bilinéaire) suffit, car $\dim V=\dim L(V;\R)$.

**Si on la retire.** Hypothèse de confort : si $V$ est un espace de Hilbert (ou de Banach) quelconque et que $\frac{\partial^2L}{\partial v^2}(u_0,q_0,v_0)$ est un isomorphisme **continu** de $V$ sur $L(V;\R)$ (cette fois la seule injectivité ne suffit plus), son inverse est automatiquement continu par le théorème d'isomorphisme de Banach ([[ch05-isomorphisme-banach]]), et la preuve ci-dessous s'applique mot pour mot.

## Idée de la preuve

On calcule $d\Phi$ composante par composante : $d\Phi(\delta u,\delta q,\delta v)=(\delta u,\ \delta q,\ \partial_u\partial_vL\,\delta u+\partial_q\partial_vL\,\delta q+\partial_v\partial_vL\,\delta v)$. Ce système triangulaire se résout explicitement grâce à l'inversibilité de $\partial^2_{v}L$. On applique l'inversion locale ($k=1$) ; comme $\Phi$ recopie $u$ et $q$, son inverse est de la forme $(u,q,p)\mapsto(u,q,g(u,q,p))$.

## Preuve

Notons $x=(u,q,v)$ un point de $\mathcal O=I\times V\times V$, ouvert de l'espace de Banach (de dimension finie) $\R\times V\times V$, et $F=\R\times V\times L(V;\R)$, espace de Banach de dimension finie.

*Étape 1 : $\Phi$ est de classe $C^1$.* Les deux premières composantes de $\Phi$ sont les projections $(u,q,v)\mapsto u$ et $(u,q,v)\mapsto q$, linéaires continues, donc $C^\infty$ et égales à leur différentielle ([[ch05-differentielle-lineaire]]). La troisième est $\frac{\partial L}{\partial v}:\mathcal O\to L(V;\R)$. Par définition de la différentielle partielle ([[ch05-differentielles-partielles]]), $\frac{\partial L}{\partial v}(x)=dL_x\circ\iota_3$, où $\iota_3:V\to\R\times V\times V$, $h\mapsto(0,0,h)$ est l'injection canonique. Comme $L$ est $C^2$, $x\mapsto dL_x$ est de classe $C^1$ ; l'application $T\mapsto T\circ\iota_3$ de $L(\R\times V\times V;\R)$ dans $L(V;\R)$ est linéaire continue ; par composition ([[ch05-composition-differentielles]]), $\frac{\partial L}{\partial v}$ est de classe $C^1$. Une application à valeurs dans un produit est $C^1$ si et seulement si ses composantes le sont, et sa différentielle se calcule composante par composante ([[ch05-differentiabilite-composantes]]) : $\Phi$ est $C^1$ et, pour $h=(\delta u,\delta q,\delta v)\in\R\times V\times V$,
$$
d\Phi_x(h)=\Big(\delta u,\ \delta q,\ d\Big(\frac{\partial L}{\partial v}\Big)_x(h)\Big).
$$

*Étape 2 : calcul de $d\Phi_x$.* La fonction $\frac{\partial L}{\partial v}$ étant différentiable en $x$, la formule des différentielles partielles ([[ch05-differentielles-partielles]]) donne
$$
d\Big(\frac{\partial L}{\partial v}\Big)_x(\delta u,\delta q,\delta v)=\underbrace{\frac{\partial}{\partial u}\frac{\partial L}{\partial v}(x)}_{=:A_x}\delta u+\underbrace{\frac{\partial}{\partial q}\frac{\partial L}{\partial v}(x)}_{=:B_x}\delta q+\underbrace{\frac{\partial}{\partial v}\frac{\partial L}{\partial v}(x)}_{=:C_x}\delta v ,
$$
avec $A_x\in L(\R;L(V;\R))$, $B_x\in L(V;L(V;\R))$ et $C_x\in L(V;L(V;\R))$. Le dernier terme est précisément $C_x(\ell_1)=\frac{\partial^2L}{\partial v^2}(x)\cdot(\ell_1,\cdot)$ : c'est la forme bilinéaire $\frac{\partial^2L}{\partial v^2}(x)$ vue comme application linéaire de $V$ dans $L(V;\R)$ ([[ch05-isometrie-bilineaire-curryfication]]). Ainsi
$$
d\Phi_x(\delta u,\delta q,\delta v)=\big(\delta u,\ \delta q,\ A_x\delta u+B_x\delta q+C_x\delta v\big).
$$

*Étape 3 : $d\Phi_x$ est un isomorphisme bicontinu.* Par hypothèse ($L$ régulier), $C_x$ est un isomorphisme de $V$ sur $L(V;\R)$ ; son inverse $C_x^{-1}$ est linéaire, donc continu puisque $L(V;\R)$ est de dimension finie (en dimension infinie : [[ch05-isomorphisme-banach]]). Soit $(a,b,c)\in\R\times V\times L(V;\R)$. L'équation $d\Phi_x(\delta u,\delta q,\delta v)=(a,b,c)$ équivaut à
$$
\delta u=a,\qquad \delta q=b,\qquad C_x\delta v=c-A_xa-B_xb\iff \delta v=C_x^{-1}\big(c-A_xa-B_xb\big).
$$
Elle a donc une unique solution : $d\Phi_x$ est bijective, d'inverse $(a,b,c)\mapsto\big(a,b,C_x^{-1}(c-A_xa-B_xb)\big)$, qui est linéaire continue (composée et somme d'applications linéaires continues). Comme $d\Phi_x$ est elle-même linéaire continue, c'est un isomorphisme bicontinu. Ceci vaut en tout point $x=(u_0,q_0,v_0)$ de $\mathcal O$ : c'est le point 1.

*Étape 4 : inversion locale.* $\Phi:\mathcal O\to F$ est de classe $C^1$ sur l'ouvert $\mathcal O$ de l'espace de Banach réel $\R\times V\times V$, et $d\Phi_{(u_0,q_0,v_0)}$ est un isomorphisme bicontinu. Le théorème d'inversion locale ([[ch06-inversion-locale]], avec $k=1$) fournit un voisinage ouvert $\mathcal U_0$ de $(u_0,q_0,v_0)$ dans $\mathcal O$ et un voisinage ouvert $\mathcal V_0$ de $\Phi(u_0,q_0,v_0)$ dans $F$ tels que $\Phi$ se restreigne en un $C^1$-difféomorphisme de $\mathcal U_0$ sur $\mathcal V_0$. Notons $\Psi:\mathcal V_0\to\mathcal U_0$ sa réciproque, de classe $C^1$.

*Étape 5 : forme de la réciproque.* Soit $y=(u,q,p)\in\mathcal V_0$ et $x=\Psi(y)=(u',q',v')\in\mathcal U_0$. Alors $\Phi(x)=y$, c'est-à-dire $\big(u',q',\frac{\partial L}{\partial v}(u',q',v')\big)=(u,q,p)$ ; donc $u'=u$ et $q'=q$. Ainsi $\Psi(u,q,p)=(u,q,g(u,q,p))$, où $g:\mathcal V_0\to V$ est la troisième composante de $\Psi$, de classe $C^1$ par [[ch05-differentiabilite-composantes]]. Enfin, pour $(u,q,v)\in\mathcal U_0$ et $(u,q,p)\in\mathcal V_0$ :
$$
p=\frac{\partial L}{\partial v}(u,q,v)\iff\Phi(u,q,v)=(u,q,p)\iff(u,q,v)=\Psi(u,q,p)\iff v=g(u,q,p),
$$
la deuxième équivalence venant de ce que $\Phi:\mathcal U_0\to\mathcal V_0$ est bijective de réciproque $\Psi$. C'est le point 2. $\square$

## Preuve à trous

*Régularité.* La troisième composante de $\Phi$ est $\frac{\partial L}{\partial v}=\big(T\mapsto T\circ\iota_3\big)\circ dL$, de classe $C^1$ car <trou indice="quelle est la régularité de dL ?">$L$ est $C^2$, donc $dL$ est $C^1$, et $T\mapsto T\circ\iota_3$ est linéaire continue</trou> ; les deux autres composantes sont des projections. Donc $\Phi$ est $C^1$.

*Différentielle.* En notant $A_x=\frac{\partial}{\partial u}\frac{\partial L}{\partial v}(x)$, $B_x=\frac{\partial}{\partial q}\frac{\partial L}{\partial v}(x)$ et $C_x=\frac{\partial^2L}{\partial v^2}(x)\cdot(\,\cdot\,,\cdot)\in L(V;L(V;\R))$, on a <trou indice="calculer composante par composante, puis formule des différentielles partielles">$d\Phi_x(\delta u,\delta q,\delta v)=\big(\delta u,\ \delta q,\ A_x\delta u+B_x\delta q+C_x\delta v\big)$</trou>.

*Inversibilité.* Pour $(a,b,c)\in\R\times V\times L(V;\R)$, l'équation $d\Phi_x(\delta u,\delta q,\delta v)=(a,b,c)$ a pour unique solution <trou indice="système triangulaire : on utilise l'hypothèse de régularité sur le dernier bloc">$\delta u=a$, $\delta q=b$, $\delta v=C_x^{-1}(c-A_xa-B_xb)$</trou>, qui dépend linéairement et continûment de $(a,b,c)$ : $d\Phi_x$ est un isomorphisme bicontinu.

*Conclusion.* Par <trou indice="quel théorème, avec quelle valeur de k ?">le théorème d'inversion locale avec $k=1$, $\Phi$ se restreint en un $C^1$-difféomorphisme $\Phi:\mathcal U_0\to\mathcal V_0$ entre voisinages ouverts de $(u_0,q_0,v_0)$ et de $\Phi(u_0,q_0,v_0)$</trou>. Comme les deux premières composantes de $\Phi$ sont $u$ et $q$, <trou indice="si Φ(u',q',v')=(u,q,p), que valent u' et q' ?">la réciproque s'écrit $(u,q,p)\mapsto(u,q,g(u,q,p))$ avec $g$ de classe $C^1$</trou>, et $p=\frac{\partial L}{\partial v}(u,q,v)\iff v=g(u,q,p)$ sur ces voisinages. $\square$

## Exemples

* **Masse variable, potentiel.** $V=\R^n$ (produit scalaire usuel), $L(u,q,v)=\tfrac12m(u)\norm v^2-U(q)$ avec $m:I\to\,]0,+\infty[$ et $U:V\to\R$ de classe $C^2$. On a $\frac{\partial L}{\partial v}(u,q,v)=m(u)\langle v,\cdot\rangle$, que l'on identifie au vecteur $m(u)v$ ; $\frac{\partial^2L}{\partial v^2}(u,q,v)=m(u)\langle\cdot,\cdot\rangle$, isomorphisme puisque $m(u)\neq0$. Ici $A_x\delta u=m'(u)\langle v,\cdot\rangle\,\delta u$, $B_x=0$, et $d\Phi_x(\delta u,\delta q,\delta v)\simeq(\delta u,\ \delta q,\ m'(u)\delta u\,v+m(u)\delta v)$. L'inverse est explicite et **global** : $g(u,q,p)=p/m(u)$, et $\Phi$ est un $C^1$-difféomorphisme de $I\times V\times V$ sur $I\times V\times V$. Pour $m\equiv1$ : $p=v$ (c'est le cas de [[ch08-equation-newton]]).
* **Longueur d'un graphe : l'image n'est pas tout l'espace.** $V=\R$, $L(u,q,v)=\sqrt{1+v^2}$. On calcule $\frac{\partial L}{\partial v}=\dfrac{v}{\sqrt{1+v^2}}\in\,]-1,1[$ et $\frac{\partial^2L}{\partial v^2}=\dfrac{1}{\sqrt{1+v^2}}-\dfrac{v^2}{(1+v^2)^{3/2}}=(1+v^2)^{-3/2}>0$ : $L$ est régulier. De $p=v/\sqrt{1+v^2}$ on tire $p^2(1+v^2)=v^2$, soit $v^2=p^2/(1-p^2)$, et $v$ a le signe de $p$ : $g(u,q,p)=\dfrac{p}{\sqrt{1-p^2}}$, définie seulement pour $\abs p<1$. Ici $\Phi$ est un difféomorphisme de $I\times\R\times\R$ sur $I\times\R\times\,]-1,1[$ : l'ensemble $\mathcal V_0$ où $g$ a un sens n'est pas tout $I\times V\times L(V;\R)$.
* **Régulier partout mais pas globalement inversible.** $V=\R^2$, $L(u,q,v)=e^{v_1}\cos v_2$. La hessienne en $v$ est $\begin{pmatrix}e^{v_1}\cos v_2&-e^{v_1}\sin v_2\\-e^{v_1}\sin v_2&-e^{v_1}\cos v_2\end{pmatrix}$, de déterminant $-e^{2v_1}(\cos^2v_2+\sin^2v_2)=-e^{2v_1}\neq0$ : $L$ est régulier en tout point. Mais $p=\frac{\partial L}{\partial v}\simeq(e^{v_1}\cos v_2,\,-e^{v_1}\sin v_2)$ est $2\pi$-périodique en $v_2$ : $\Phi(u,q,v_1,v_2)=\Phi(u,q,v_1,v_2+2\pi)$. L'inverse $g$ n'existe que **localement** ; pour un inverse global il faudrait l'injectivité de $\Phi$ ([[ch06-inversion-globale]]), assurée par exemple si $v\mapsto L(u,q,v)$ est strictement convexe.

## Pièges

* > ⚠️ Le résultat est **local** : « $d\Phi$ est un isomorphisme en tout point » n'entraîne pas que $\Phi$ soit injective (troisième exemple). La fonction $g$ dépend du point $(u_0,q_0,v_0)$ autour duquel on travaille. En dimension $1$ ($V=\R$), en revanche, la régularité force $v\mapsto\frac{\partial L}{\partial v}(u,q,v)$ à être strictement monotone, donc $\Phi$ injective.
* > ⚠️ $g$ n'est que de classe $C^1$ (car $\Phi$ n'est que $C^1$ quand $L$ est $C^2$), et elle est définie sur l'ouvert $\mathcal V_0$ fourni par l'inversion locale, qui n'est en général **pas un produit** $J\times U'$ ni tout l'espace $I\times V\times L(V;\R)$ (deuxième exemple : l'image de $\Phi$ est $I\times\R\times\,]-1,1[$) : il faudra le réduire à un produit pour appliquer Cauchy-Lipschitz ([[ch08-systeme-premier-ordre-cauchy-lipschitz]]).
* On n'inverse pas « $v\mapsto\frac{\partial L}{\partial v}$ à $(u,q)$ fixés » directement (ce serait un énoncé sans dépendance $C^1$ en $(u,q)$) : on inverse $\Phi$, qui recopie $(u,q)$. C'est ce qui donne d'un coup un $g$ de classe $C^1$ **en les trois variables**.
* Seul le bloc $\frac{\partial^2L}{\partial v^2}$ de la différentielle seconde de $L$ compte : grâce à la structure triangulaire de $d\Phi$, les blocs $\frac{\partial^2L}{\partial u\partial v}$, $\frac{\partial^2L}{\partial q\partial v}$ n'ont aucune influence sur l'inversibilité. Ne pas confondre la régularité avec la non-dégénérescence de la hessienne complète de $L$.
* $p$ vit dans $L(V;\R)$ (une forme linéaire, l'« impulsion ») ; on l'identifie à un vecteur de $V$ par le produit scalaire. Pour $L=\tfrac12\norm v^2-U(q)$ cette identification donne $p=v$, mais en général $p\neq v$ (premier et deuxième exemples).
* Le nom « transformation de Legendre » n'est pas employé par le poly ; dans la littérature il désigne souvent le passage de $L$ au Hamiltonien $H(u,q,p)=p\cdot g(u,q,p)-L(u,q,g(u,q,p))$ (voir [[ch08-systeme-premier-ordre-cauchy-lipschitz]]).
