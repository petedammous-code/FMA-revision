---
id: ch06-point-fixe-parametre-continu
type: theorem
chapter: 6
title: Point fixe de Banach à paramètre I (continuité)
ref: Théorème VI.1.2
page: 116
importance: 2
depends: [ch06-point-fixe-banach, ch06-lipschitz-contractante-def]
tags: [point-fixe, parametre, continuite, contractante, banach]
---
## Intuition

> 💡 On a maintenant une **famille** d'applications contractantes $g_\lambda$, indexée par un paramètre $\lambda$. Chacune a un unique point fixe $\varphi(\lambda)$ ([[ch06-point-fixe-banach]]). Question : si l'on bouge un peu $\lambda$, le point fixe bouge-t-il un peu ? Oui, à condition que les $g_\lambda$ dépendent continûment de $\lambda$ et soient **toutes** contractantes avec la **même** constante $a<1$.

Le mécanisme : un point fixe d'une contraction est « stable ». Si $g_{\lambda_2}$ déplace l'ancien point fixe $\varphi(\lambda_1)$ d'une distance $\delta$, alors le nouveau point fixe est à distance au plus $\delta/(1-a)$ de l'ancien. Plus la contraction est forte ($a$ petit), plus le point fixe est robuste.

Un **espace topologique** $\Lambda$ est un ensemble muni d'une notion d'ouverts (par exemple un espace métrique, un ouvert de $\R^n$) : c'est le minimum pour parler de continuité en $\lambda$.

## Énoncé

**Théorème (poly, Théorème VI.1.2, p. 116) — Point fixe de Banach à paramètre I.** Soient $\Lambda$ un espace topologique, $(X,d)$ un espace métrique complet et
$$
g : \Lambda\times X\to X
$$
une application continue. Soit $a\in[0\,;1[$. On suppose que pour tout $\lambda\in\Lambda$, l'application
$$
g_\lambda : X\to X,\qquad x\mapsto g(\lambda,x)
$$
est $a$-lipschitzienne. Alors, pour tout $\lambda\in\Lambda$, l'application $g_\lambda$ admet un unique point fixe $\varphi(\lambda)$ et l'application $\Lambda\to X$, $\lambda\mapsto\varphi(\lambda)$ est continue.

**Estimation clé (contenue dans la preuve).** Pour tous $\lambda_1,\lambda_2\in\Lambda$,
$$
(1-a)\,d(\varphi(\lambda_1),\varphi(\lambda_2))\le d\big(g(\lambda_1,\varphi(\lambda_1)),g(\lambda_2,\varphi(\lambda_1))\big).
$$

## Hypothèses

### H1 — $(X,d)$ complet

**Rôle.** Elle permet d'appliquer [[ch06-point-fixe-banach]] à chaque $g_\lambda$ : sans elle, $\varphi(\lambda)$ n'existe même pas.

**Si on la retire.** $X=\,]0,1]$, $\Lambda=\R$, $g(\lambda,x)=x/2$ : $g$ est continue, chaque $g_\lambda$ est $\frac12$-lipschitzienne de $X$ dans $X$, mais aucun $g_\lambda$ n'a de point fixe dans $X$.

### H2 — $g$ continue

**Rôle.** La preuve n'utilise en fait que la continuité de $\lambda\mapsto g(\lambda,x)$ **à $x$ fixé** (avec $x=\varphi(\lambda_1)$) : c'est elle qui rend petit le membre de droite de l'estimation clé.

**Si on la retire.** $\Lambda=X=\R$ et $g(\lambda,x)=0$ si $\lambda\le0$, $g(\lambda,x)=1$ si $\lambda>0$. Chaque $g_\lambda$ est constante, donc $0$-lipschitzienne, de point fixe $\varphi(\lambda)=g(\lambda,\cdot)$, soit $\varphi=\mathbf 1_{]0,+\infty[}$ : discontinue en $0$.

### H3 — la constante $a<1$ est la même pour tous les $\lambda$

**Rôle.** Elle permet de diviser par $1-a>0$, **indépendamment de $\lambda_2$**, dans l'estimation clé. (Seule l'uniformité **locale** compte : la continuité étant une propriété locale, il suffit que chaque $\lambda_1$ ait un voisinage sur lequel une même constante $a<1$ convient.)

**Si on la retire.** Si chaque $g_\lambda$ est $a_\lambda$-lipschitzienne avec $a_\lambda<1$ mais $\sup a_\lambda=1$, la preuve ne marche plus et les points fixes peuvent dégénérer : $g(\lambda,x)=\lambda x+1$ sur $X=\R$, $\Lambda=[0,1[$, est $\lambda$-lipschitzienne en $x$ et $\varphi(\lambda)=\dfrac1{1-\lambda}\to+\infty$ quand $\lambda\to1$ (ici $\varphi$ reste continue sur $\Lambda$, car l'uniformité locale est satisfaite). Honnêtement : je ne connais pas de contre-exemple simple où chaque $g_\lambda$ est contractante, $g$ continue, et $\varphi$ discontinue ; en dimension finie ($X$ fermé de $\R^n$) il n'y en a pas — un argument de compacité sur une petite boule fermée autour de $\varphi(\lambda_1)$ montre que $g_\lambda$ envoie cette boule dans elle-même pour $\lambda$ voisin de $\lambda_1$ — mais cet argument utilise la compacité des boules fermées, fausse en dimension infinie.

## Idée de la preuve

Existence et unicité de $\varphi(\lambda)$ : Banach. Continuité : on insère le terme $g(\lambda_2,\varphi(\lambda_1))$ dans $d(\varphi(\lambda_1),\varphi(\lambda_2))=d(g(\lambda_1,\varphi(\lambda_1)),g(\lambda_2,\varphi(\lambda_2)))$, on utilise que $g_{\lambda_2}$ est $a$-lipschitzienne, et on fait passer $a\,d(\varphi(\lambda_1),\varphi(\lambda_2))$ à gauche.

## Preuve

D'après le théorème de point fixe de Banach ([[ch06-point-fixe-banach]]), appliqué à $T=g_\lambda$ sur l'espace complet $X$, quel que soit $\lambda\in\Lambda$, $g_\lambda$ admet un unique point fixe $\varphi(\lambda)$.

Soient $\lambda_1,\lambda_2\in\Lambda$. Comme $\varphi(\lambda_i)=g(\lambda_i,\varphi(\lambda_i))$, l'inégalité triangulaire (avec le point intermédiaire $g(\lambda_2,\varphi(\lambda_1))$) puis le caractère $a$-lipschitzien de $g_{\lambda_2}$ donnent
$$
\begin{aligned}
d(\varphi(\lambda_1),\varphi(\lambda_2))&=d\big(g(\lambda_1,\varphi(\lambda_1)),g(\lambda_2,\varphi(\lambda_2))\big)\\
&\le d\big(g(\lambda_1,\varphi(\lambda_1)),g(\lambda_2,\varphi(\lambda_1))\big)+d\big(g(\lambda_2,\varphi(\lambda_1)),g(\lambda_2,\varphi(\lambda_2))\big)\\
&\le d\big(g(\lambda_1,\varphi(\lambda_1)),g(\lambda_2,\varphi(\lambda_1))\big)+a\,d(\varphi(\lambda_1),\varphi(\lambda_2)),
\end{aligned}
$$
d'où (toutes les quantités étant finies)
$$
(1-a)\,d(\varphi(\lambda_1),\varphi(\lambda_2))\le d\big(g(\lambda_1,\varphi(\lambda_1)),g(\lambda_2,\varphi(\lambda_1))\big).
$$
Fixons $\lambda_1$ et posons $x_1=\varphi(\lambda_1)$. Soit $\eps>0$. L'application $\lambda\mapsto g(\lambda,x_1)$ est continue en $\lambda_1$ (car $g$ est continue), donc il existe un voisinage $W$ de $\lambda_1$ dans $\Lambda$ tel que $d(g(\lambda_1,x_1),g(\lambda_2,x_1))<(1-a)\eps$ pour tout $\lambda_2\in W$. Pour un tel $\lambda_2$, l'inégalité précédente donne $d(\varphi(\lambda_1),\varphi(\lambda_2))<\eps$ (on divise par $1-a>0$). Donc $\varphi$ est continue en $\lambda_1$, et ceci pour tout $\lambda_1\in\Lambda$. $\square$

## Preuve à trous

Pour chaque $\lambda$, $\varphi(\lambda)$ existe et est unique par <trou>le théorème de point fixe de Banach appliqué à $g_\lambda$ sur $X$ complet</trou>. Pour $\lambda_1,\lambda_2\in\Lambda$, on insère le point intermédiaire <trou indice="on veut ne faire varier qu'une seule variable à la fois">$g(\lambda_2,\varphi(\lambda_1))$</trou> :
$$
d(\varphi(\lambda_1),\varphi(\lambda_2))\le d\big(g(\lambda_1,\varphi(\lambda_1)),g(\lambda_2,\varphi(\lambda_1))\big)+d\big(g(\lambda_2,\varphi(\lambda_1)),g(\lambda_2,\varphi(\lambda_2))\big).
$$
Le second terme est majoré par <trou>$a\,d(\varphi(\lambda_1),\varphi(\lambda_2))$ car $g_{\lambda_2}$ est $a$-lipschitzienne</trou>, d'où
$$
(1-a)\,d(\varphi(\lambda_1),\varphi(\lambda_2))\le d\big(g(\lambda_1,\varphi(\lambda_1)),g(\lambda_2,\varphi(\lambda_1))\big),
$$
et le membre de droite tend vers $0$ quand $\lambda_2\to\lambda_1$ par <trou>continuité de $\lambda\mapsto g(\lambda,x)$ à $x=\varphi(\lambda_1)$ fixé</trou>. $\square$

## Exemples

* **Un exemple explicite.** $\Lambda=[-\tfrac12,\tfrac12]$, $X=\R$, $g(\lambda,x)=\lambda x+1$ : $g$ est continue et chaque $g_\lambda$ est $\frac12$-lipschitzienne. Le point fixe est $\varphi(\lambda)=\dfrac1{1-\lambda}$, bien continu. Vérification de l'estimation clé : $d(g(\lambda_1,\varphi(\lambda_1)),g(\lambda_2,\varphi(\lambda_1)))=|\lambda_1-\lambda_2|\,\varphi(\lambda_1)$, et en effet $|\varphi(\lambda_1)-\varphi(\lambda_2)|=\dfrac{|\lambda_1-\lambda_2|}{(1-\lambda_1)(1-\lambda_2)}\le\dfrac{|\lambda_1-\lambda_2|\,\varphi(\lambda_1)}{1-\frac12}$ puisque $\dfrac1{1-\lambda_2}\le 2$.
* **Équation de Kepler.** Pour une excentricité $e\in[0,1[$ fixée et $\lambda=M\in\R$ (anomalie moyenne), $g(M,x)=M+e\sin x$ sur $X=\R$ est continue et $e$-lipschitzienne en $x$ (car $|\sin x-\sin y|\le|x-y|$). L'équation de Kepler $x=M+e\sin x$ a donc une unique solution $\varphi(M)$ (l'anomalie excentrique), qui dépend continûment de $M$, avec $|\varphi(M_1)-\varphi(M_2)|\le\dfrac{|M_1-M_2|}{1-e}$.
* **Paramètre non numérique.** $\Lambda=C^0([0,1])$ (muni de $\|\cdot\|_\infty$), $X=\R$, $g(u,x)=\frac12\cos x+\int_0^1u(t)\,dt$ : $\varphi(u)$, solution de $x=\frac12\cos x+\int_0^1u$, dépend continûment de la fonction $u$ (ici même $|\varphi(u)-\varphi(v)|\le2\|u-v\|_\infty$).

## Pièges

* > ⚠️ La constante $a$ doit être **indépendante de $\lambda$** (au moins localement) : c'est elle qui apparaît dans $1/(1-a)$.
* Le théorème ne donne que la **continuité** de $\varphi$ ; pour la différentiabilité il faut la version II ([[ch06-point-fixe-parametre-cp]]), avec des hypothèses de dérivabilité et un $X$ **convexe**.
* $\Lambda$ n'a besoin d'aucune structure (ni complétude, ni structure vectorielle) : seule la topologie sert.
* Dans l'estimation clé, le membre de droite fait varier **seulement** $\lambda$, à $x=\varphi(\lambda_1)$ fixé : il ne faut pas essayer de majorer $d(g(\lambda_1,x),g(\lambda_2,y))$ en faisant varier les deux arguments à la fois.
